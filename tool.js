const fs = require("fs");
const mkdirp = require('mkdirp');
const inquirer = require('inquirer');

function upperFirstLatter(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function createThing(path, name, type) {
    //    fs.writeFileSync

    function generate() {
        mkdirp.sync(`${path}/${name}`);
        fs.writeFileSync(`${path}/${name}/index.js`, `export * from './${name}.${type}';`);
        if (type === "component") {
            fs.writeFileSync(`${path}/${name}/${name}.${type}.ts`, `
import { Component } from '@angular/core';


@Component({
  selector: '${name}',
  templateUrl: './${name}.component.html'
})
export class ${upperFirstLatter(name)}Component {
  constructor() {

  }
  ngOnInit() {

  }
}
    `);
            fs.writeFileSync(`${path}/${name}/${name}.${type}.less`, '');
            fs.writeFileSync(`${path}/${name}/${name}.${type}.html`, '');
        }
    }
    try {
        fs.statSync(`${path}/${name}`);
        console.log("The folder exists.");
    } catch (e) {
        generate();
    }


}
const repl = require('repl');

function initializeContext(context) {  
    Object.assign(context,{createThing})
}

const r = repl.start({prompt: '>'});
initializeContext(r.context);
