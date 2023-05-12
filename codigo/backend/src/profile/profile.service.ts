export class ProfileService {
  async findOne(id: string) {
    // const checkUser = this.prisma.user.findOne({
    //     where: {id: id}
    // })

    // if(!checkUser){
    //     throw new Error("User doesn't exist")
    // }
    const user = [
      { id: "ashfd", name: "Carlos", Pontuação: 10 },
      { id: "bcg", name: "Carlinhos", Pontuação: 2 },
    ];

    const connect = user[0].id;

    return connect;
  }

  async findAll() {
    const user = [
      { id: "ashfd", name: "Carlos", Pontuação: 10 },
      { id: "bcg", name: "Carlinhos", Pontuação: 2 },
    ];

    return 'oi';
  }
}
