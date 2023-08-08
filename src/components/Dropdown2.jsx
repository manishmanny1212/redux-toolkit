import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { setOptions, setSelectedOption } from '../store/slices/dropdownSlice';
import { fetchData } from '../api'

function Dropdown2() {
    const dispatch=useDispatch()
    const { options, selectedOption } = useSelector((state) => state.dropdown);

    useEffect(() => {
        fetchData().then((data) => {
          dispatch(setOptions(data));
        });
      }, [dispatch]);
    const selectHandler1=(event)=>{
        const selectedId = parseInt(event.target.value);
        const selected = options.find((option) => option.id === selectedId);
        dispatch(setSelectedOption(selected));
        
    }
  return (
    <div>
        <div>dropdown</div>
        <select onChange={selectHandler1} name="" id="">
            <option value="">select value</option>
            <option value={0}>value1</option>
            <option value={1}> value2</option>
        </select>
    </div>
  )
}

export default Dropdown2