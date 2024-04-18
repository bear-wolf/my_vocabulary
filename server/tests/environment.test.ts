import 'dotenv/config'
it("process environment", async () => {
    expect(process.env.PORT).toBe('4000')
});