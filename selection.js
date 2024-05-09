function select(username, count) {
    console.log(`${username} and ${count}`);
}

function deselect(username) {
    let number = 4 * 2;
    console.log(`${username} can't be deselected..`);
}

select('manish', 3);