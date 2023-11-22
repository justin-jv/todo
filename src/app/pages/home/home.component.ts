

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
[x: string]: any;
  inputAdd!: string;
  items: any;
  
constructor(private api: ApiService) { }
  todos: any;
  newTaskTitle: string = '';
    
      ngOnInit(){
        this.api.getTodo().subscribe((data:any) => {
          this.todos=data
        })

      }
      delete(id: any) {
        this.todos = this.todos.filter((e : {id:any})=> e.id != id)
      }
      addNewTask() {
        if (this.newTaskTitle.trim() !== '') {
          const newTask = { title: this.newTaskTitle, finished: false };
          this.todos.push(newTask);
          this.newTaskTitle = ''; // Clear the input field after adding the task
        }
      }
      updateTask(item: any): void {
        item.completed = !item.completed;
    }
    
    
    }
    
  
