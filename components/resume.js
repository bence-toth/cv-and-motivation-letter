const Resume = ({data: {personal, contacts, skillSet, work, education, summary, specialities}}) => (
  <>
    <Page layout='sidebar-on-left'>
      <>
        <Avatar
          imageURL={personal.imageURL}
          name={personal.name}
          positionTitle={personal.positionTitle}
        />
        <Skills fields={skillSet} />
        <Contacts rows={contacts} />
      </>
      <WorkExperience positions={work} />
    </Page>
    <Page layout='two-columns-with-footer'>
      <>
        <Summary>
          {summary
            .split('\n')
            .map(paragraph => <p>{paragraph}</p>)
          }
        </Summary>
        <Specialities items={specialities} />
      </>
      <Education schools={education} />
      <Footer
        personal={personal}
        contacts={contacts}
      />
    </Page>
    <Page layout='full-page'>
      <MotivationLetter
        name={personal.name}
        signatureURL={personal.signatureURL}
      />
    </Page>
  </>
)
