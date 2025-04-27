import { Component } from '@angular/core';
import { Product } from 'src/models/product'

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent {
  studentList = [
    {rollno: 101, studentName: "Vivek", courseName: "Java", courseFees: 55000},
    {rollno: 102, studentName: "Vishal", courseName: "DotNet", courseFees: 45000},
    {rollno: 103, studentName: "Meena", courseName: "Java", courseFees: 55000},
    {rollno: 104, studentName: "Ram", courseName: "Java", courseFees: 55000},
    {rollno: 105, studentName: "Shweta", courseName: "DotNet", courseFees: 45000},
    {rollno: 106, studentName: "Kiran", courseName: "Python", courseFees: 50000}
  ];

  employeeList = [
    {employeeNo: 101, employeeName: "Kiran", skills: [
      {skillId: 1, skillName: "Java", experience: "2 years"},
      {skillId: 2, skillName: "SQL Server", experience: "1 year"},
      {skillId: 3, skillName: "Angular", experience: "1 year"}
    ]},
    {employeeNo: 102, employeeName: "Harshad", skills: [
      {skillId: 1, skillName: "HTML", experience: "3 years"},
      {skillId: 2, skillName: "JavaScript", experience: "2 years"},
      {skillId: 3, skillName: "NodeJS", experience: "2 years"}
    ]},
    {employeeNo: 103, employeeName: "Vivek", skills: [
      {skillId: 1, skillName: "CSS", experience: "3 years"},
      {skillId: 2, skillName: "Hibernate", experience: "1 year"},
      {skillId: 3, skillName: "ReactJS", experience: "2 years"}
    ]},
    {employeeNo: 104, employeeName: "Vishal", skills: [
      {skillId: 1, skillName: "Bootstrap", experience: "3 years"},
      {skillId: 2, skillName: "Python", experience: "2 years"},
      {skillId: 3, skillName: "RestAPI", experience: "1 year"}
    ]}
  ];

  productList: Product[] = [
    new Product(101, "Wireless Mouse", "A smooth and responsive wireless mouse with ergonomic design.", 26),
    new Product(102, "Mechanical Keyboard", "A durable mechanical keyboard with customizable RGB lighting.", 90),
    new Product(103, "USB-C Charger", "Fast-charging 65W USB-C charger compatible with laptops and phones.", 40),
    new Product(104, "Noise Cancelling Headphones", "Over-ear headphones with active noise cancellation and 30-hour battery life.", 129),
    new Product(105, "4K Monitor", "Ultra HD 27-inch monitor with vivid colors and a 144Hz refresh rate.", 350)
  ];
}
