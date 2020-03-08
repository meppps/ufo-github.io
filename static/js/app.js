
// === Table Script === //
var tbody = d3.select('tbody');
var input = d3.select('#datetime');
var filterBtn = d3.select('#filter-btn');
var resetBtn = d3.select('#reset-btn');
var dataset;

// === Reusable Fill Function === //
function fill(){
    dataset.forEach((entry)=>{
        var row = tbody.append('tr');
        Object.entries(entry).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);      
    })})
};

// === Show all entries === //
function fillAll(){
    tbody.html("");
    dataset = data;
    fill();
};



// === Filter function === //
function filterByDate(date){
    return data.filter(data => data.datetime == date);
}



// === Event listener === //
filterBtn.on('click',()=>{
    tbody.html("")
    var query = input.property('value');
    dataset = filterByDate(query);
    fill();
});

// ==== Reset Button === //
resetBtn.on('click',()=>{
    fillAll();
})


// Show all on page load
fillAll();



