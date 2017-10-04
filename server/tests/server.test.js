const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todos');

const todos = [{
    text: 'first test'
}, {
    test: 'second test'
}];

beforeEach((done) => {
    Todo.remove().then(() => {
        Todo.insertMany([{
            text: 'first test'
        }, {
            text: 'second test'
        }]);
    }).then(() => done());
});

describe('Post /todos', () => {
    
    it('should create a new todo', (done) => {
        var text = 'Test todo text';

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
            }

            Todo.find({text}).then((todos) => {
                var test = Todo.find({});
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch((e) => done(e));
        });
    });

    it('should not create a todo with invalid body data', (done) => {
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
            Todo.insertMany([{
                text: 'first test'
            }, {
                test: 'second test'
            }]);   
            Todo.find().then((todos) => {
                expect(todos.length).toBe(2);
                done();
            }).catch((e)=> done(e));
        });
    });
});

describe('GET /todos', ()=> {
    it('Should get all todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(2);
            })
            .end(done);
    });
});