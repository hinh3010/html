const listItem = [
    { id: 1, name: "Huong Tran", lop: "bỏ học", detai: "Thiết kế web buôn lậu", status: true },
    { id: 2, name: "Hinh Tran", lop: "bỏ học", detai: "Thiết kế web buôn lậu", status: true },
    { id: 3, name: "Le Tran Trung Hieu", lop: "bỏ học", detai: "Thiết kế web buôn lậu", status: false },
    { id: 4, name: "Tran Thi My", lop: "bỏ học", detai: "Thiết kế web buôn lậu", status: true },
];
const content = document.querySelector("#content");
const htmls = listItem.map((item) => {
    return `
        <tr height="50px">
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.lop}</td>
            <td>${item.detai}</td>
            ${item.status ? '<td>đã ĐK</td><td></td>' : '<td></td><td>chưa ĐK</td>'}
        </tr>
        `;
});
content.innerHTML = htmls.join("");