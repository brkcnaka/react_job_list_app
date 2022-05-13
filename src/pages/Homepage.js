import React, { useContext } from 'react'
import styled from 'styled-components'
import CreateButton from '../components/CreateButton'
import JobTable from '../components/JobTable'
import JobsFilters from '../components/JobsFilters'
import SectionTitle from '../components/SectionTitle'
import SelectInput from '../components/SelectInput'
import TextInput from '../components/TextInput'
import { AppContext } from '../provider'
import UpdateModal from '../components/UpdateModal'
import DeleteModal from '../components/DeleteModal'

export default function Homepage() {
  const { jobName, setJobName, priorityLabelData, setAddNewPriority } =
    useContext(AppContext)
  return (
    <>
      <Container>
        <section>
          <SectionTitle title="Create New Job" />
          <NewJobWrapper>
            <JobNameWrapper>
              <TextInput
                label="Job Name"
                onChange={setJobName}
                value={jobName}
              />
            </JobNameWrapper>
            <JobPriorityWrapper>
              <SelectInput
                showPlaceHolder
                label="Job Priority"
                options={priorityLabelData}
                onChange={setAddNewPriority}
              />
            </JobPriorityWrapper>
            <ButtonWrapper>
              <CreateButton />
            </ButtonWrapper>
          </NewJobWrapper>
        </section>

        <section>
          <SectionTitle title="Job List" />
          <JobsFilters />
          <JobTable />
        </section>
      </Container>

      <UpdateModal />
      <DeleteModal />
    </>
  )
}

const Container = styled.div.attrs(() => ({
  className: 'container',
}))``

const NewJobWrapper = styled.div.attrs(() => ({
  className: 'row',
}))``
const JobNameWrapper = styled.div.attrs(() => ({
  className: 'col-md-7',
}))``
const JobPriorityWrapper = styled.div.attrs(() => ({
  className: 'col-md-3',
}))``
const ButtonWrapper = styled.div.attrs(() => ({
  className: 'col-md-2 align-self-end',
}))``
