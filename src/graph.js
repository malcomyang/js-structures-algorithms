class Vertex {
    console(label, wasVisited){
        this.label = label;
        this.wasVisited = wasVisited;
    }
}

function AddEdge(v, w){
    this[adj][v].push(w);
    this[adj][w].push(v);
}

function ShowGraph(){
    for(let i = 0; i < this[adj].length; i++){
        let line = i + ' -> ';
        for(let j = 0; j < this[adj][i].length; j++){
            line += this[adj][i][j] + ' ';
        }
        console.log(line);
    }
}

function Dfs(v){
    this.marked = [];
    this.startVertex = v;
    for(let i = 0; i < this.vertices; i++){
        this.marked[i] = false;
    }
    this.DeepFirstSearch(v);
}

function Bfs(s){
    this.edgeTo = [];
    this.marked = [];
    this.startVertex = s;
    for(let i = 0; i < this.vertices; i++){
        this.marked[i] = false;
    }
    this.BreadthFirstSearch(s);
}

function ShortestPath(origin, destination){
    if (origin == destination){
        console.log(origin);
        return false;
    }

    this.bfs(origin);

    if (this.marked[destination] == false){
        console.log(origin + ' cannot path to ' + destination);
        return false;
    }
    let path = [];
    for (let o = destination; o != origin; o = this.edgeTo[o]){
        path.push(o);
    }
    path.push(origin);
    let line = '';
    while(path.length > 0){
        line += path.pop() + '-';
    }
    console.log(line.substr(0, line.length - 1));
}

const adj = Symbol('adj');
class Graph{
    constructor(vs){
        this.vertices = vs;
        this.edges = 0;
        this[adj] = [];
        this.addEdge = AddEdge;
        this.showGraph = ShowGraph;
        this.dfs = Dfs;
        this.bfs = Bfs;
        this.shortestPath = ShortestPath;
        this.edgeTo = [];

        for(var i = 0; i < vs; i++){
            this[adj][i] = [];
        }
    }

    DeepFirstSearch(v){
        this.marked[v] = true;
        console.log(this.startVertex + ' Visited vertex: ' + v);
        for(let w of this[adj][v]){
            if (this.marked[w] == false){
                this.DeepFirstSearch(w);
            }
        };
    }

    BreadthFirstSearch(s){
        let queue = [];
        this.marked[s] = true;
        queue.push(s);
        while(queue.length > 0){
            let v = queue.shift();
            console.log(this.startVertex + ' Visited vertex: ' + v);
            for(let w of this[adj][v]){
                if (this.marked[w] == false){
                    this.edgeTo[w] = v;
                    this.marked[w] = true;
                    queue.push(w);
                }
            }
        }
    }
}