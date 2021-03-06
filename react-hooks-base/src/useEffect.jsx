import React, { useEffect, useState, useMemo, useCallback } from 'react';

let arr = [1, 2]
let set = new Set(); // 无重复的数据集 越等数组
set.add(1);
set.add(1);
console.log(set);
let set1 = new Set([1,1,1,1,1,1]);
console.log(set1);
function Demo() {
    console.log('render');
    const [inputVal, setVal] = useState('海阔天空');
    const [list, setList] = useState([]);
    // const [val, setVal] = ['', () => {}]
    // const val = [1,2]
    const val = useMemo(() => arr);
    set.add(val);
    console.log(set.size);
    console.log(val === arr)
    const handleChange = useCallback((event) => {
        setVal(event.target.value);
        // console.log(event.target.value);
        // console.log(inputVal,'+++++++++++++++++');
    })
    useEffect(() => {
        // 有个问题 当输入框为空时 不能直接输入中文，得输入英文才行
        fetch('http://neteasecloudmusicapi.zhaoboy.com/search?keywords='+ (inputVal ? inputVal : '海阔天空'))
            .then(res => res.json())
            .then(res => {
                setList(res.result.songs);
            })
            return() =>{
                // 卸载
                // clearInterval()
                // document.removeEventListener()
            }
    }, [inputVal])
    console.log(inputVal)
    // [inputVal] 依赖: react 检查 ([]里面的 inputVal) 依赖里面有没有数据发生变化，没变化就不会重新调用
    // [] => 只会执行一次 componentDidMount
    // [inputVal] 多次 componentDidUpdate
    return (
        <div>
            <ul>
                {list !== undefined ? list.map((m) => {
                    return (
                        <li key={m.id}>{m.name}</li>
                    )
                }) : (<div></div>)}
            </ul>
            <input type="text" value={inputVal} onChange={handleChange}></input>
        </div>
    )
}
export default Demo