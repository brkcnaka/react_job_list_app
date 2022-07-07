import React, { useContext } from 'react'
import Modal from 'react-bootstrap/Modal'
import styled from 'styled-components'

import { AppContext } from 'provider'
import CustomButton from 'components/CustomButton'
import { WarnSVG } from 'assets/icons'

export default function DeleteModal() {
  const { deleteModalVisible, handleDeleteModal, deleteJob } =
    useContext(AppContext)

  return (
    <Modal
      centered
      show={deleteModalVisible}
      onHide={() => handleDeleteModal()}
    >
      <Modal.Body className="p-5 text-center">
        <WarnIcon width={45} src={WarnSVG} />

        <ModalTitle>Are you sure you want to delete it?</ModalTitle>

        <ButtonWrapper>
          <CustomButton
            buttonType={0}
            marginRight
            onClick={() => handleDeleteModal()}
          />
          <CustomButton buttonType={2} onClick={() => deleteJob()} />
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

const WarnIcon = styled.img.attrs(() => ({
  className: 'mb-4',
}))``
