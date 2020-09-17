import './style.less'


export default class Page { 
    constructor() {
        this._root = document.getElementById('root');
        const wrapper = document.createElement('div');

        this._root.append(wrapper);
    }  
    onCanvasPress = cb => {

    }

    onCanvasUp = cb => {

    }
}