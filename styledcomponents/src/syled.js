
import styled from "styled-components"

// ALT+96 = ``
// Creamos el componente:
export const MiCaja=styled.div`

  width: 120px;
  height: 50px;
  margin: 20px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2), 
              -4px -4px 10px rgba(255, 255, 255, 0.3);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: inset 4px 4px 10px rgba(0, 0, 0, 0.2),
                inset -4px -4px 10px rgba(255, 255, 255, 0.3);
    transform: translateY(2px);
  }

  &:active {
    box-shadow: inset 6px 6px 15px rgba(0, 0, 0, 0.3),
                inset -6px -6px 15px rgba(255, 255, 255, 0.4);
    transform: translateY(4px);
  }

`;

