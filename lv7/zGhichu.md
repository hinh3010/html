

## `@background`

        các hiệu ứng liên quan tới background

1. opacity : quy định Độ mờ / Độ trong suốt của một phần tử 0 - 1

2. rgba() : (đỏ, lục, lam, alpha ) alpha là Độ mờ / Độ trong suốt của một phần tử 0 - 1

3. background-color: thiết lập màu nền của một phần tử.

4. background-image: thiết lập hình nền cho một phần tử.

5. background-repeat: điều khiển sự lặp đi lặp lại của một hình ảnh nền theo chiều dọc||ngang.

6. background-position: điều khiển vị trí của một hình ảnh nền.

7. background-attachment: xác định xem có || không một hình nền là cố định hoặc có thể scroll với phần còn lại của trang.

### `giá trị cơ bản`

```css
background-image: none  ;      
background-position: 0% 0% ;    /*vị trí*/
background-size: auto auto ;    /*size*/
background-repeat: repeat ;     /*cho lặp lại ảnh*/
background-origin: padding-box ;
background-clip: border-box ;   /*viền*/
background-attachment: scroll ; /*quận*/
background-color: transparent ; /*màu trong suốt*/
```

## `@fontfamily`

```css
font-family: "Courier New", Courier,monospace;  /*kiểu phông chữ*/
font: size 30px;                /*kích thước chữ*/
font-weight: 500;               /*độ đậm của chữ*/
```

## `@color`

```css
color: rgb(93, 92, 92);
color: deeppink ;               /*màu chữ*/
```

## `@text-align`

```css
text-align: center;             /*căn giữa*/
```

## `@text-decoration`

```css
text-decoration: underline;     /*gạch chân*/
text-decoration: blink;         /*nhấp nháy*/
```

## `@letter-spacing`

```css
letter-spacing: 10px;           /*khoảng cách giữ các kí tự*/
```

## `@text-transform`

```css
text-transform: uppercase;      /*in hoa kí tự*/
text-transform: lowercase;      /*in thường kí tự*/
```

## `:hover`

```css
.title:hover {          /*kíck hoạt khi di chuột qua*/
    color: red;
}
```

## `:active`

```css
.title:active {         /*kíck hoạt giữ chuột*/
    font-size: 30px;
}    
```

## `.class`
```html
<!-- class cho phép css chung -->
<p class="text">Khi con tu hú gọi bầy</p>
<p class="text">Lúa chiêm đang chín trái cây ngọt dần</p>
<p class="text">Vườn râm dậy tiếng ve ngân</p>
<p class="text">Bắp rây vàng hạt đầy sân nắng đào</p>
<p class="text">Trời xanh càng rộng càng cao</p>
<p class="text">Đôi con diều sáo lộn nhào từng không…</p>
```

## `#id`
```html
<!-- id => css riêng cho từng element  -->
<!-- & có cấp độ css > class => ghi đè đc css của class -->
<p id="first">Khi con tu hú gọi bầy</p>
<p id="last">Lúa chiêm đang chín trái cây ngọt dần</p>
<!-- for của label và id của input trùng nhau => khi click label tự focus input -->
<label for="test">User Name</label>
<input id="test" type="text">
```

## `div - span`
```html
<!-- div là 1 element có thuộc tính block -->
<!-- span là 1 element có thuộc tính inline -->
<div class="container">
    <h2 class="title">Khi Con Tu Hú</h2>
    <span class="text">Khi con tu hú gọi bầy</span>
    <span class="text">Lúa chiêm đang chín trái cây ngọt dần</span>
    <span class="text">Vườn râm dậy tiếng ve ngân</span>
    <span class="text">Bắp rây vàng hạt đầy sân nắng đào</span>
    <span class="text">Trời xanh càng rộng càng cao</span>
    <span class="text">Đôi con diều sáo lộn nhào từng không…</span>
</div>>
```

## `padding - margin - border`
```css
.container {
    padding: 20px;          /* đệm */
    margin: 50px;           /* lề */
    border: 1px solid #333; /* viền */
    border-radius: 10px;    /* bo viền */
}
```

```html
                        <!-- padding -->
<!-- padding-top:  , padding-right:  , padding-bottom:  , padding-left: -->
<!-- Nếu padding có 4 giá trị => padding: 25px 50px 75px 100px (trên,phải,dưới,trái)-->
<!-- Nếu padding có 3 giá trị => padding: 25px 50px 75px (trên,phải&trái=50,dưới)-->
<!-- Nếu padding có 2 giá trị => padding: 25px 50px (trên&dưới=25,phải&trái=50)-->
<!-- Nếu padding có 1 giá trị => padding: 25px (trên & dưới & phải & trái =25)-->

                        <!-- border :width color style --> 
<!-- border-width: ...px 
border-top-width
border-bottom-width
border-left-width
border-right-width-->

                        <!--   border-style:
dotted - Xác định đường viền có dấu chấm
dashed - Xác định đường viền đứt nét
solid - Xác định một đường viền vững chắc
double - Xác định đường viền kép
groove- Xác định đường viền có rãnh 3D. Hiệu ứng phụ thuộc vào giá trị màu viền
ridge- Xác định đường viền 3D. Hiệu ứng phụ thuộc vào giá trị màu viền
inset- Xác định đường viền in 3D. Hiệu ứng phụ thuộc vào giá trị màu viền
outset- Xác định đường viền ban đầu 3D. Hiệu ứng phụ thuộc vào giá trị màu viền
none - Xác định không có đường viền
hidden - Xác định một đường viền ẩn -->

                        <!-- margin --> 
<!-- margin-top:  , margin-right:  , margin-bottom:  , margin-left: -->
<!-- Nếu margin có 4 giá trị => margin: 25px 50px 75px 100px (trên,phải,dưới,trái)-->
<!-- Nếu margin có 3 giá trị => margin: 25px 50px 75px (trên,phải&trái=50,dưới)-->
<!-- Nếu margin có 2 giá trị => margin: 25px 50px (trên&dưới=25,phải&trái=50)-->
<!-- Nếu margin có 1 giá trị => margin: 25px (cả 4 lề =25)-->
```