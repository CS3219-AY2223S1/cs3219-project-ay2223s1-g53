import Card from "./../components/Card";
import styled from "styled-components";


const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

export default function DifficultyPage() {
    
  return (
    <div>
        <Card title="easy" body="hard"> </Card>  
    </div>
  );
}
