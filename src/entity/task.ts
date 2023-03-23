import {Injectable} from "@nestjs/common";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("Task")
export class Task {

    @PrimaryGeneratedColumn()
    isTask: number;

    @Column({type: "varchar"})
    description: string

}
