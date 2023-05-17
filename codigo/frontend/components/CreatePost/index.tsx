import React from "react";
import { useState } from "react";
import styles from "./styles.module.scss";
import { Col, Grid, Row } from "react-styled-flexboxgrid";



const CreatePost: React.FC = () => {

    //Text lenght limiter
    const [text, setText] = useState("");
    const maxLength = 500;

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    };

    const charactersUsed = text.length;
    
  return (
    <div className={styles.createPost}>
      <form>
        <Grid>
          <Row className={styles.row} center="xs">
            <h2>New Post</h2>
            <p className={styles.subtitle}>
              Share your recommendations with the community!
            </p>
          </Row>
          <Row className={styles.row}>
            <Col xs={12}>
              <div className={styles.inputGroup}>
                <div className={styles.postTitleCounter}>
                    <label>Post Content</label>
                    <h5>{charactersUsed}/{maxLength}</h5>
                </div>
                <textarea
                  placeholder="Share a link to a website, video, podcast..."
                    required
                  onChange={handleChange}
                  maxLength={maxLength}
                />
              </div>
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col xs={12}>
              <div className={styles.inputGroup}>
                <label>Add Image</label>
                <input
                  className={styles.fileUpload}
                  type="file"
                  aria-required="true"
                />
              </div>
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col xs={12}>
              <div className={styles.inputGroup}>
                <label>Add Tags</label>
                <input
                  type="text"
                  placeholder="IA, Phyton, Business..."
                  required
                />
              </div>
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col xs={12}>
              <div className={styles.inputGroup}>
                <input
                  className={styles.createBtn}
                  type="submit"
                  value="Create Post"
                />
              </div>
            </Col>
          </Row>
        </Grid>
      </form>
    </div>
  );
};

export default CreatePost;
