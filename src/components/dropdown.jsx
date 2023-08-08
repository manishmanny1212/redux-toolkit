import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOptions, setSelectedOption } from '../store/slices/dropdownSlice';
import { fetchData } from '../api'; // Implement your API fetching logic
import styled from 'styled-components';

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Select = styled.select`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
`;

const Option = styled.option`
  padding: 8px;
  font-size: 16px;
`;

const SelectedOptionContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Dropdown = () => {
  const dispatch = useDispatch();
  const { options, selectedOption } = useSelector((state) => state.dropdown);

  useEffect(() => {
    fetchData().then((data) => {
      dispatch(setOptions(data));
    });
  }, [dispatch]);

  const handleSelect = (event) => {
    const selectedId = parseInt(event.target.value);
    const selected = options.find((option) => option.id === selectedId);
    dispatch(setSelectedOption(selected));
  };

  return (
    <DropdownContainer>
      <h2>Styled Dropdown Menu</h2>
      <Select onChange={handleSelect}>
        <Option value="">Select an option</Option>
        {options.map((option) => (
          <Option key={option.id} value={option.id}>
            {option.name}
          </Option>
        ))}
      </Select>
      {selectedOption && (
        <SelectedOptionContainer>
          <h3>Selected Option:</h3>
          <p>ID: {selectedOption.id}</p>
          <p>Name: {selectedOption.name}</p>
        </SelectedOptionContainer>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
