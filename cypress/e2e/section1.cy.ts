describe("Next Lesson Button on Course Pages", () => {
    beforeEach(() => {
      // @ts-ignore
      cy.restoreLocalStorage()
    })
  
    afterEach(() => {
      // @ts-ignore
      cy.saveLocalStorage()
    })
  
    it("says 'Start Course' and links to the first lesson if none of the lessons have been completed", () => {
      cy.visit(`/${sectionSlug}`)
      cy.getBySel("next-lesson-button").then(($btn) => {
        // @ts-ignore
        const text = $btn.text()
        // @ts-ignore
        const href = $btn.attr("href")
  
        expect(text).to.eq("Start Course")
        expect(href).to.eq(
          `/${sectionSlug}/${coursesJson[`${sectionSlug}`].lessons[0].slug}`
        )
      })
    })
})