import {Component} from 'react'
import {
  BgContainer,
  BgSubContainer,
  Heading,
  EditableContainer,
  Description,
  UserInput,
  Button,
} from './styledComponent'

class EditableTextInput extends Component {
  state = {
    isButtonClicked: false,
    editableText: '',
  }

  onChangeEditableText = event => {
    this.setState({editableText: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({
      isButtonClicked: !prevState.isButtonClicked,
    }))
  }

  render() {
    const {editableText, isButtonClicked} = this.state
    const EditSaveButton = isButtonClicked ? 'Edit' : 'Save'

    return (
      <BgContainer>
        <BgSubContainer>
          <Heading>Editable Text Input</Heading>
          <EditableContainer>
            {isButtonClicked ? (
              <Description>{editableText}</Description>
            ) : (
              <UserInput
                type="text"
                value={editableText}
                onChange={this.onChangeEditableText}
              />
            )}
            <Button type="button" onClick={this.onClickButton}>
              {EditSaveButton}
            </Button>
          </EditableContainer>
        </BgSubContainer>
      </BgContainer>
    )
  }
}

export default EditableTextInput
