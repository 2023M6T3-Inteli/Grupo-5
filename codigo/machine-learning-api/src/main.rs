#[macro_use]
extern crate rocket;

use rocket::serde::json::Json;
use serde::{Deserialize, Serialize};

use std::net::{IpAddr, Ipv4Addr};

use std::process::Command;

#[derive(Serialize)]
struct Pong {
    message: String,
}

#[get("/")]
fn index() -> Json<Pong> {
    Json(Pong {
        message: "pong".to_string(),
    })
}

#[derive(Deserialize)]
struct Body {
    movie_id: u64,
    amount: u64,
}

#[derive(Serialize)]
struct Response {
    based_on: String,
    amount: u64,
    movies: Vec<String>,
}

#[post("/getRecommendations", data = "<body>")]
fn get_recommendations(body: Json<Body>) -> Json<Response> {
    let movie_id: u64 = body.movie_id;
    let amount: u64 = body.amount;

    let output = Command::new("python")
        .args(&[
            "src/movie_recommender.py",
            &movie_id.to_string(),
            &amount.to_string(),
        ])
        .output()
        .expect("Failed to execute the Python script");

    let recommendations_str = String::from_utf8(output.stdout).unwrap();
    let recommendations_json: serde_json::Value =
        serde_json::from_str(&recommendations_str).unwrap();

    let based_on = recommendations_json["based_on"]
        .as_str()
        .unwrap()
        .to_string();

    let recommendations = recommendations_json["recommendations"].as_array().unwrap();

    let movies: Vec<String> = recommendations
        .iter()
        .map(|title| title.as_str().unwrap().to_string())
        .collect();

    Json(Response {
        amount: movies.len() as u64,
        based_on,
        movies,
    })
}

#[rocket::main]
async fn main() {
    let mut config = rocket::Config::default();

    config.address = IpAddr::V4(Ipv4Addr::new(0, 0, 0, 0));
    config.port = 5500;

    let _ = rocket::build()
        .configure(config)
        .mount("/", routes![index, get_recommendations])
        .launch()
        .await;
}
