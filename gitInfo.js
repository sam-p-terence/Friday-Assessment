/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefinition = "Git is a version control system which allows individuals and teams to track changes to code projects."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition = "GitHub is an online tool that allows users to upload their git reporitories online using drag and drop or via the Operating Systems command or terminal line, and share it with others."

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE

const init = {};

Object.defineProperties(init, {
  description: {
    value: "The Init command initializes a new git repository",
    writable: true
  },
  code: {
      value: "git init"
  }
});

console.log(init.description);
console.log(init.code);



//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE

const clone = {};

Object.defineProperties(clone, {
  description: {
    value: "Clone creates a working copy of a local repository",
    writable: true
  },
  code: {
      value: "git clone"
  }
});

console.log(clone.description);
console.log(clone.code);

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE

const status = {};

Object.defineProperties(status, {
  description: {
    value: "Status lists the files you've changed and those you still need to add or commit",
    writable: true
  },
  code: {
      value: "git status"
  }
});

console.log(status.description);
console.log(status.code);

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE

const add = {};

Object.defineProperties(add, {
  description: {
    value: "Adds one or more files to staging (index)",
    writable: true
  },
  code: {
      value: "git add ."
  }
});

console.log(add.description);
console.log(add.code);

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE

const commit = {};

Object.defineProperties(commit, {
  description: {
    value: "Commit changes to head (but not yet to the remote repository)",
    writable: true
  },
  code: {
      value: "git commit -m"
  }
});

console.log(commit.description);
console.log(commit.code);

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE

const push = {};

Object.defineProperties(push, {
  description: {
    value: "Push sends changes to the master branch of your remote repository",
    writable: true
  },
  code: {
      value: "git push"
  }
});

console.log(push.description);
console.log(push.code);