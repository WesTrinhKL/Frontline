import React from 'react'
import './DropDown.css'
import QuizDeckFormModal from '../QuizDeckForm';
import { useHistory } from 'react-router';
// import { NavLink } from 'react-router-dom';
const EditDropDown = ({quiz_id, for_cards=false, for_banner=false}) => {
  // on click edit, send user to edit page
  const history = useHistory();

  const send_to_edit = (quiz_id)=>{
    history.push(`/edit/quizzes/${quiz_id}`)
  }

  return (
    <>
      {for_banner && quiz_id && <div className="ellipse-dropdown-container">
        <i class="fas fa-ellipsis-h sai__settings"></i>
        <div className="content-dropdown-container">
          <div className="ellipse-triangle-container">
            <div className="ellipse-dropdown-triangle-arrow-up"></div>
          </div>

          <div className="ellipse-navbar-content">
            <div className="unc__item"><i class="fas fa-folder basic-style-icon"></i>Change Folder</div>
            <QuizDeckFormModal quiz_id={quiz_id} editModeOn={true}/>
            <div className="unc_hr-container">
              <hr className="unc_hr" />
            </div>
            <QuizDeckFormModal quiz_id={quiz_id} deleteModeOn={true}/>
          </div>
        </div>
      </div>}

      {for_cards && quiz_id && <div className="ellipse-dropdown-container">
        <i class="fas fa-ellipsis-h sai__settings"></i>
        <div className="content-dropdown-container">
          <div className="ellipse-triangle-container">
            <div className="ellipse-dropdown-triangle-arrow-up"></div>
          </div>

          <div className="ellipse-navbar-content">
            {<div className="unc__item" onClick={() => send_to_edit(quiz_id)}><i className="fas fa-edit basic-style-icon"></i>Edit Cards</div>}
            {<div className="unc__item" onClick={() => send_to_edit(quiz_id)}><i className="fas fa-plus basic-style-icon"></i> <span>Add Card</span> </div>}
            {/* <div className="unc__item"><i class="fas fa-folder basic-style-icon"></i>Change Folder</div> */}


          </div>
        </div>
      </div>}

    </>
  )
}

export default EditDropDown
