import { Component, OnInit } from '@angular/core';
import { Question } from 'src/model.question';
import { QuestionService } from 'src/question.service';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questionList: Question[] = [];
  currQuestion: number = 0;
  numQuestions: number = 0;
  numCorrect: number = 0;
  form = new FormGroup({givenAns: new FormControl('')});

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.loadQuiz();
    this.numQuestions = this.questionList.length;
    console.log(this.questionList);
  }

  loadQuiz(): void {
    this.questionService.loadQuestions().subscribe(data => this.questionList=data);
  }

  nextQuestion(): void {
    this.currQuestion++;
  }

  prevQuestion(): void {
    this.currQuestion--;
  }

  submit() : void {
    var soln = this.questionList[this.currQuestion].solution;
    console.log(`soln is ${soln}`);
    var choice = this.form.value.givenAns;
    console.log(`choice is ${choice}`);
    if(choice == soln) {
      console.log("correct answer");
      this.numCorrect++;
    }
    //this.nextQuestion();
  }

}
