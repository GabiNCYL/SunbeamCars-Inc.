const output = document.getElementById("output");
let template = "";
for (const members of memberslist) {
    template = `
    <section class="member">
        <img src="${members.image}" alt="Member" class="image"> 
        <div class="names">
            ${members.name}
        </div>
        <div class="all">
            ${members.category} ${members.people} ${members.suitcases}
        <div class="pricebook">
            ${members.age}
        </div>
    </section>`
    output.insertAdjacentHTML("beforeend", template)
}
