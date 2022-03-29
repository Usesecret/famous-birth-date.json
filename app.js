fetch('data.json')
    .then(res => res.json())
    .then(json => handlerData(json))

const table = document.querySelector('#table')



function handlerData(data){
    for (let i = 0; i < data.users.length; i++){

        let row = document.createElement('tr')

        let e = data.users[i]

        let cellID = document.createElement('td')
        let cellName = document.createElement('td')
        let cellPhone = document.createElement('td')

        cellID.textContent = e.id
        cellName.textContent = e.name
        cellPhone.textContent = e.phone[0]

        row.appendChild(cellID)
        row.appendChild(cellName)
        row.appendChild(cellPhone)
        table.appendChild(row)
    }
}
