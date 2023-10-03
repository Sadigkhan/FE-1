// const dropArea = document.getElementById("drop-area")
// const video = document.getElementById("video")
// const output = document.getElementById("output")

// dropArea.addEventListener("dragover", (event) => {
//     event.preventDefault()
// })

// dropArea.addEventListener("drop", (event) => {
//     event.preventDefault()

//     // console.log(event.dataTransfer.files)
//     const files = event.dataTransfer.files
//     if (files.length > 0) {
//         const file = files[0]
//         // console.log(file)

//         if (file.type.startsWith("image/")) {
//             const reader = new FileReader()
//             // console.log(reader)
//             reader.onload = (event) => {
//                 const image = new Image();
//                 // console.log(event.target.result)
//                 image.src = event.target.result
//                 image.style.maxWidth = "100%"
//                 image.style.maxHeight = "100%"
//                 dropArea.innerHTML = ""
//                 dropArea.appendChild(image)
//             }
//             reader.readAsDataURL(file)
//         } else if (file.type.startsWith("video/")) {
//             const objectURL = URL.createObjectURL(file)
//             // console.log(objectURL)
//             video.src = objectURL
//             video.play()
//         } else if (file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
//             const reader = new FileReader()
//             reader.onload = (event) => {
//                 // console.log(event.target.result)
//                 const data = new Uint8Array(event.target.result)
//                 // console.log(data)
//                 const workbook= XLSX.read(data, {type: "array"})
//                 // console.log(workbook)
//                 const firstSheet = workbook.SheetNames[0]
//                 // console.log(firstSheet)
//                 const sheet=workbook.Sheets[firstSheet]
//                 // console.log(sheet)
//                 const htmlTable = XLSX.utils.sheet_to_html(sheet)
//                 // console.log(htmlTable)
//                 output.innerHTML = htmlTable
//             }
//             reader.readAsArrayBuffer(file)
//         }
//     }
// })


const fetchBtn = document.getElementById("btn")
const output = document.getElementById("output")

// fetchBtn.addEventListener("click", function () {
//     // fetch("https://randomuser.me/api/?results=50")
//     //     .then(response => response.json())
//     //     .then(data => {
//     //         console.log(data.results)
//     //         data.results.forEach(user => {
//     //             output.innerHTML += `
//     //         <div class="card">
//     //                  <img src="${user.picture.large}" alt="">
//     //             <div class="card-body">
//     //                  <h3>${user.name.title} ${user.name.first} ${user.name.last}</h3>
//     //                  <p>${user.email}</p>
//     //                  <p>${user.phone}</p>
//     //                  <p>${user.location.city}</p>
//     //              </div>
//     //          </div>
//     //         `
//     //         })   
//     //     })



    
// })


document.addEventListener("DOMContentLoaded", function () {
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data=>data.forEach(element => {
        output.innerHTML += `
                 <div class="card">
                          <img src="${element.image}" alt="">
                     <div class="card-body">
                          <h3>${element.description} ${element.category}</h3>
                          <p>${element.price}</p>
                          <p>${element.title}</p>
                          <p>${element.id}</p>
                      </div>
                  </div>
                 `
    }))
})