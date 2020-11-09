export class Question {
    constructor(public qid: number,
        public prompt: string,
        public option1: string,
        public option2: string,
        public option3: string,
        public option4: string,
        public solution: number) {}
}