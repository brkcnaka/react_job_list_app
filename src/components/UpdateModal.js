import React, { useContext } from 'react'
import Modal from 'react-bootstrap/Modal'
import styled from 'styled-components'

import { AppContext } from 'provider'
import TextInput from 'components/TextInput'
import SelectInput from 'components/SelectInput'
import CustomButton from 'components/CustomButton'
import { newJobObject } from 'utils/dataUtils'

export default function UpdateModal() {
  const {
    updateModalVisible,
    handleUpdateModal,
    priorityLabelData,
    updateJob,
    editModalData,
    setUpdateModalData,
  } = useContext(AppContext)

  function onChangePriority(e) {
    const newData = newJobObject(editModalData?._id, editModalData?.jobName, e)
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
