import React, { useContext } from 'react'
import Modal from 'react-bootstrap/Modal'
import { AppContext } from '../provider'
import styled from 'styled-components'
import TextInput from './TextInput'
import SelectInput from './SelectInput'
import CustomButton from './CustomButton'

export default function UpdateModal(props) {
  const {
    updateModalVisible,
    handleUpdateModal,
    priorityLabelData,
    updateJob,
    editModalData,
    setUpdateModalData,
  } = useContext(AppContext)

  function onChangePriority(e) {
    const newData = {
      _id: editModalData._id,
      jobName: editModalData.jobName,
      priority: e,
    }
    setUpdateModalData(newData)
  }

  return (
    <Modal
      centered
      show={updateModalVisible}
      onHide={() => handleUpdateModal()}
    >
      <Modal.Body className="p-5">
        <ModalTitle>Job Edit</ModalTitle>
        <TextInput label="Job Name" disabled value={editModalData?.jobName} />
        <SelectInput
          label="Job Priority"
          options={priorityLabelData}
          defaultValue={editModalData?.priority}
          onChange={onChangePriority}
        />
        <ButtonWrapper>
          <CustomButton
            buttonType={0}
            marginRight
            onClick={() => handleUpdateModal()}
          />
          <CustomButton buttonType={1} onClick={() => updateJob()} />
        </ButtonWrapper>
      </Modal.Body>
    </Modal>
  )
}

const ModalTitle = styled.h4.attrs(() => ({
  className: 'text-center mb-3 ',
}))``

const ButtonWrapper = styled.div.attrs(() => ({
  className: 'd-flex ',
}))``
