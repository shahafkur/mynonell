import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("User")
export class User {

    @PrimaryGeneratedColumn()
    idUser: number;

    @Column({type: "varchar"})
    name: string;

}
