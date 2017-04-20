## react-material-calendar

material风格的日历组件



### use

```
npm install react-material-calendar
```



### Properties

| 参数            | 说明                        | 类型                                     | 默认值        | 备注                |
| ------------- | ------------------------- | -------------------------------------- | ---------- | ----------------- |
| mode          | 日历显示风格                    | string                                 | horizontal | todo              |
| selectedMode  | 日历选择模式，可单选，多选和连选          | 'mutiple' \| 'single' \| 'range'       | mutiple    | 连选还没做             |
| defaultValue  | 默认日期                      | moment                                 | 当天         |                   |
| yearRange     | 年数                        | Number                                 | 20         |                   |
| yearStartFrom | 默认                        | number                                 | 当前年份       |                   |
| monthMode     | 月份显示格式，可以以中文，英文，简写英文显示    | 'zh' \| 'en_long' \| 'en'              | zh         |                   |
| disabledDate  | 不可选日期                     | function (date: moment)                |            |                   |
| showFooter    | 是否显示                      | bool                                   | true       | Todo              |
| onOk          | 点击确定按钮的回调                 | function ()                            |            | Todo              |
| onCancel      | 点击关闭按钮的回调                 | function ()                            |            | Todo              |
|               |                           |                                        |            |                   |
| onSelectDate  | 选择日期时的回调,参数selected表示是否选中 | function ( date:moment, selected)      |            | 这里应该改一下，只有选中才触发回调 |
| onChangeMonth | 选择月份的回调,month的值在0-11之间    | function ( month:number, date: moment) |            |                   |
| onChangeYear  | 选择年份时的回调                  | function (year:number, date: moment)   |            |                   |
|               |                           |                                        |            |                   |



### todo

- range picker
- css 管理
- webpack 开发
- 剩下的回调