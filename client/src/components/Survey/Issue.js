import React from 'react'
import { Header, Icon, Message, Segment } from 'semantic-ui-react'

const Issue = () => (
  <div>
    <Header as='h5' attached='top'>
      Issue A
    </Header>
    <Segment attached>
      Q1: 
    </Segment>
    <Segment attached>
      Q2: 
    </Segment>
    <Segment attached>
      Q3: 
    </Segment>

    <Message warning attached='bottom'>
      <Icon name='warning' />
      You've reached the end of this content segment!
    </Message>
  </div>
)

export default Issue;









// import React from "react";
// import "./Survey.css";



// <Segment stacked>
//       <h3>Question 1: </h3>

  
//         <Form>
//         <Form.Field>
//           Choose how you feel about the question: <b>{this.state.value}</b>
//         </Form.Field>
//         <Form.Field>
//           <Checkbox
//             label='Strongly Disagree'
//             name='checkboxRadioGroup'
//             value='this'
//             checked={this.state.value === 'this'}
//             onChange={this.handleChange}
//           />
//         </Form.Field>
//         <Form.Field>
//           <Checkbox
//             label='Disagree'
//             name='checkboxRadioGroup'
//             value='that'
//             checked={this.state.value === 'that'}
//             onChange={this.handleChange}
//           />
//         </Form.Field>
//          <Form.Field>
//           <Checkbox
//             label='Somewhat Disagree'
//             name='checkboxRadioGroup'
//             value='that'
//             checked={this.state.value === 'that'}
//             onChange={this.handleChange}
//           />
//         </Form.Field>
//          <Form.Field>
//           <Checkbox
//             label='Somewhat Agree'
//             name='checkboxRadioGroup'
//             value='that'
//             checked={this.state.value === 'that'}
//             onChange={this.handleChange}
//           />
//         </Form.Field>
//         <Form.Field>
//           <Checkbox
//             label='Agree'
//             name='checkboxRadioGroup'
//             value='that'
//             checked={this.state.value === 'that'}
//             onChange={this.handleChange}
//           />
//         </Form.Field>
//       </Form>
//     </Segment>


//     <Segment stacked>
//       <h3>Gun ownership is a 2nd Amendment right and should not be regulated.</h3>

  
//         <Form>
//         <Form.Field>
//           Choose how you feel about the question: <b>{this.state.value}</b>
//         </Form.Field>
//         <Form.Field>
//           <Checkbox
//             label='Strongly Disagree'
//             name='checkboxRadioGroup'
//             value='this'
//             checked={this.state.value === 'this'}
//             onChange={this.handleChange}
//           />
//         </Form.Field>
//         <Form.Field>
//           <Checkbox
//             label='Disagree'
//             name='checkboxRadioGroup'
//             value='that'
//             checked={this.state.value === 'that'}
//             onChange={this.handleChange}
//           />
//         </Form.Field>
//          <Form.Field>
//           <Checkbox
//             label='Somewhat Disagree'
//             name='checkboxRadioGroup'
//             value='that'
//             checked={this.state.value === 'that'}
//             onChange={this.handleChange}
//           />
//         </Form.Field>
//          <Form.Field>
//           <Checkbox
//             label='Somewhat Agree'
//             name='checkboxRadioGroup'
//             value='that'
//             checked={this.state.value === 'that'}
//             onChange={this.handleChange}
//           />
//         </Form.Field>
//         <Form.Field>
//           <Checkbox
//             label='Agree'
//             name='checkboxRadioGroup'
//             value='that'
//             checked={this.state.value === 'that'}
//             onChange={this.handleChange}
//           />
//         </Form.Field>
//       </Form>
//     </Segment>

//     <Segment stacked>
//       <h3>Development of renewable energy (e.g. solar, wind, thermal) should be supported by government funding.</h3>

  
//         <Form>
//         <Form.Field>
//           Choose how you feel about the question: <b>{this.state.value}</b>
//         </Form.Field>
//         <Form.Field>
//           <Checkbox
//             label='Strongly Disagree'
//             name='checkboxRadioGroup'
//             value='this'
//             checked={this.state.value === 'this'}
//             onChange={this.handleChange}
//           />
//         </Form.Field>
//         <Form.Field>
//           <Checkbox
//             label='Disagree'
//             name='checkboxRadioGroup'
//             value='that'
//             checked={this.state.value === 'that'}
//             onChange={this.handleChange}
//           />
//         </Form.Field>
//          <Form.Field>
//           <Checkbox
//             label='Somewhat Disagree'
//             name='checkboxRadioGroup'
//             value='that'
//             checked={this.state.value === 'that'}
//             onChange={this.handleChange}
//           />
//         </Form.Field>
//          <Form.Field>
//           <Checkbox
//             label='Somewhat Agree'
//             name='checkboxRadioGroup'
//             value='that'
//             checked={this.state.value === 'that'}
//             onChange={this.handleChange}
//           />
//         </Form.Field>
//         <Form.Field>
//           <Checkbox
//             label='Agree'
//             name='checkboxRadioGroup'
//             value='that'
//             checked={this.state.value === 'that'}
//             onChange={this.handleChange}
//           />
//         </Form.Field>
//       </Form>
//     </Segment>


// export default Survey;