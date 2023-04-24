import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity('Mcountry')
export class Mcountry{
   @PrimaryGeneratedColumn()

    name: string;

    @Column({type: "varchar"})

    code?: string;
   

}