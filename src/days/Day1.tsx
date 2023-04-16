
import { useState } from 'react';
import './day1.css';

export interface Task {
    id: string,
    title: string,
    body: string,
    list: string
}

enum taskState {
    todo = 'todo',
    doing = 'doing',
    finished = 'finished'
}

const Day1 = () => {

    const [tasks, setTasks] = useState<Task[]>([
        {
            id: '1',
            title: 'Tarea 1',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
            list: 'todo'
        },
        {
            id: '2',
            title: 'Tarea 2',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
            list: 'todo'
        },
        {
            id: '3',
            title: 'Tarea 3',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
            list: 'finished'
        },
        {
            id: '4',
            title: 'Tarea 4',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
            list: 'doing'
        },
        {
            id: '5',
            title: 'Tarea 5',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
            list: 'doing'
        },
    ]);

    const draggingOver = (evt: React.DragEvent) => {
        evt.preventDefault();
    }


    const onDrop = (evt: React.DragEvent, list: string) => {
        const itemID = evt.dataTransfer.getData('itemID')
        const item: any = tasks.find(item => item.id === itemID)
        item.list = list;
        console.log('drop ', evt);

        const newState = tasks.map(task => {
            if (task.id === itemID)
                return item;

            return task
        })
        setTasks(newState)
    }

    const startDrag = (evt: React.DragEvent, item: Task) => {
        evt.dataTransfer.setData('itemID', item.id)
        console.log(item);
    }

    const getList = (list: string) => {
        return tasks.filter((item: Task) => item.list === list)
    }

    return (
        <div className='dragAndDrop__container'>
            <h1>Drag & Drop</h1>


            <br />


            <div className='dragAndDrop'>
                <div className='dragAndDrop__column b-red'>
                    <h3 className='dragAndDrop__column-title'>To Do</h3>
                    <hr />
                    <div className='dd-zone '
                        onDragOver={(e) => draggingOver(e)}
                        onDrop={(e) => onDrop(e, 'todo')}


                    >

                        {
                            getList('todo').map(item => (


                                <div key={item.id} className='card-task mt-2' draggable
                                    onDragStart={(evt) => startDrag(evt, item)}>
                                    <h3 className='card-task__title'>{item.title}</h3>
                                    <p className='card-task__description'>{item.body}</p>
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className='dragAndDrop__column b-yellow'>
                    <h3 className='dragAndDrop__column-title'>Doing</h3>
                    <hr />
                    <div className='dd-zone'
                        onDragOver={(e) => draggingOver(e)}
                        onDrop={(e) => onDrop(e, 'doing')}
                    >
                        {
                            getList('doing').map(item => (


                                <div key={item.id} className='card-task mt-2' draggable
                                    onDragStart={(evt) => startDrag(evt, item)}>
                                    <h3 className='card-task__title'>{item.title}</h3>
                                    <p className='card-task__description'>{item.body}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='dragAndDrop__column b-blue'>
                    <h3 className='dragAndDrop__column-title'>Finished</h3>
                    <hr />
                    <div className='dd-zone'
                        onDragOver={(e) => draggingOver(e)}
                        onDrop={(e) => onDrop(e, 'finished')}
                    >
                        {
                            getList('finished').map(item => (


                                <div key={item.id} className='card-task mt-2' draggable
                                    onDragStart={(evt) => startDrag(evt, item)}>
                                    <h3 className='card-task__title'>{item.title}</h3>
                                    <p className='card-task__description'>{item.body}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Day1;
