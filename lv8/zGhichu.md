## Trần Văn Hinh
_____

### `width && height`
```css
.title {
    width: 100%;
    height: 50vh;
    min-width: 300px;
    max-height: 300px;
}
```

### `float`
```css
.btn-create {
    float: right;
    float: left;
    float: none;
}
```

### `position`
```css
.btn-create {
    position: fixed;
    top: 25px;
    right: 25px;
    padding: 10px 20px;
}
#slider {
    position: relative;
    /*position:relative lấy chính nó làm gốc tọa độ ko phụ thuộc vào đối tượng khác*/
    margin-top: 46px;
    margin-bottom: 60px;
    padding-top: 50% ;
    background: url('/HTML+CSS/web-all-in-one/vforum-hinh-nen-assassins-creed-dep-twalls-5.jpg') top center / cover no-repeat ;
}
#slider .text-content{
    position: absolute;
    /* position: absolute lấy thẻ chứa nó có relative gần nhất làm gốc để di chuyển */
    color: rgb(222, 235, 235);
    bottom: 48px;
    width: 100%;
    text-align: center;
    z-index : 9999;
}
```

### `z-index`
```css
#slider .text-content{
    z-index : 9999;
    /* độ ưu tiên đè lên các thành phần đứng sau nó */
    position: absolute;
    /* position: absolute lấy thẻ chứa nó có relative gần nhất làm gốc để di chuyển */
    color: rgb(222, 235, 235);
    bottom: 48px;
    width: 100%;
    text-align: center;
}
```

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>Position</title>
        <style>
            li:nth-of-type(1) {
                position: relative;
                top: 10px;
                left: 200px;
            }
            .box {
                width: 100%;
                height: 120px;
                background-color: greenyellow;
                position: relative;
            }
            .box-child {
                background-color: salmon;
                position: absolute;
                left: 30px;
                bottom: 30px;
                top: 10px;
                right: 10px;
            }
            ol {
                height: 1000px;
            }
            li:nth-of-type(3) {
                position: fixed;
                top: 300px;
            }
            li:nth-of-type(4) {
                font-size: 50px;
                margin-top: 100px;
                background-color: slateblue;
                position: sticky;
                top: 10px;
            }
        </style>
    </head>
    <body>
        <h1>Position-Vị trí</h1>
        <ol>
            <li>Relative-Tương đối</li>
            <!--position:relative lấy chính nó làm gốc tọa độ ko phụ thuộc vào đối tượng khác -->
            <li>Absolute-Tuyệt đối</li>
            <!--position: absolute lấy thẻ chứa nó có relative gần nhất làm gốc để di chuyển bên trong -->
            <li>Fixed</li>
            <!-- cố định vào cửa sổ trình duyệt -->
            <li>sticky</li>
            <!-- dính -->
        </ol>
        <div class="box">
            <div class="box-child">Absolute</div>
        </div>
    </body>
</html>

```