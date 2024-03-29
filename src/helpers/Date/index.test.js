import { getMonth } from ".";

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function returns 'janvier' for the date '2022-01-01'", () => {
            const date = new Date("2022-01-01");
            const result = getMonth(date);
            expect(result).toEqual("janvier");
        });

        it("the function returns 'juillet' for the date '2022-07-08'", () => {
            const date = new Date("2022-07-08");
            const result = getMonth(date);
            expect(result).toEqual("juillet");
        });
    });
});

