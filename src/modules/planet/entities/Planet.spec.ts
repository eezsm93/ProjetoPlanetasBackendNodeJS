import { Planet } from "./Planet";

describe("Company Unit test validation", () => {
  it("should be able create a Planet", () => {
    expect(() => {
      new Planet({
        id: "1",
        name: "Terra",
        description: "O planeta onde eu vivo",
        surfaceArea: 1,
        sunDistance: 2,
        durationDay: 3,
        gravity: 9,
      } as any);
    });
  });

  it("should not be able to create a Planet without a name", () => {
    expect(() => {
      new Planet({
        id: "1",
        name: "",
        description: "teste",
        surfaceArea: 1,
        sunDistance: 2,
        durationDay: 3,
        gravity: 10,
      } as any);
    }).toThrowError();
  });

  it("should not be able to create a Planet with number on name", () => {
    expect(() => {
      new Planet({
        id: "1",
        name: 10,
        description: "teste",
        surfaceArea: 1,
        sunDistance: 2,
        durationDay: 3,
        gravity: 10,
      } as any);
    }).toThrowError();
  });

  it("should not be able to create a Planet without description", () => {
    expect(() => {
      new Planet({
        id: "1",
        name: "Terra",
        description: "",
        surfaceArea: 1,
        sunDistance: 2,
        durationDay: 3,
        gravity: 10,
      } as any);
    }).toThrowError();
  });

  it("should not be able to create a Planet with number on description", () => {
    expect(() => {
      new Planet({
        id: "1",
        name: "Terra",
        description: 9999,
        surfaceArea: 1,
        sunDistance: 2,
        durationDay: 3,
        gravity: 10,
      } as any);
    }).toThrowError();
  });

  it("should not be able to create a Planet without surfaceArea", () => {
    expect(() => {
      new Planet({
        id: "1",
        name: "Terra",
        description: "Teste",
        surfaceArea: null,
        sunDistance: 2,
        durationDay: 3,
        gravity: 10,
      } as any);
    }).toThrowError();
  });

  it("should not be able to create a Planet with string on surfaceArea", () => {
    expect(() => {
      new Planet({
        id: "1",
        name: "Terra",
        description: "teste",
        surfaceArea: "teste com string",
        sunDistance: 2,
        durationDay: 3,
        gravity: 10,
      } as any);
    }).toThrowError();
  });

  it("should not be able to create a Planet without sunDistance", () => {
    expect(() => {
      new Planet({
        id: "1",
        name: "Terra",
        description: "Teste",
        surfaceArea: 1,
        sunDistance: null,
        durationDay: 3,
        gravity: 10,
      } as any);
    }).toThrowError();
  });

  it("should not be able to create a Planet with string on surDistance", () => {
    expect(() => {
      new Planet({
        id: "1",
        name: "Terra",
        description: "teste",
        surfaceArea: 1,
        sunDistance: "teste com string",
        durationDay: 3,
        gravity: 10,
      } as any);
    }).toThrowError();
  });

  it("should not be able to create a Planet without durationDay", () => {
    expect(() => {
      new Planet({
        id: "1",
        name: "Terra",
        description: "Teste",
        surfaceArea: 1,
        sunDistance: 2,
        durationDay: null,
        gravity: 10,
      } as any);
    }).toThrowError();
  });

  it("should not be able to create a Planet with string on durationDay", () => {
    expect(() => {
      new Planet({
        id: "1",
        name: "Terra",
        description: "teste",
        surfaceArea: 1,
        sunDistance: 2,
        durationDay: "Teste com String",
        gravity: 10,
      } as any);
    }).toThrowError();
  });

  it("should not be able to create a Planet without gravity", () => {
    expect(() => {
      new Planet({
        id: "1",
        name: "Terra",
        description: "Teste",
        surfaceArea: 1,
        sunDistance: 2,
        durationDay: 3,
        gravity: null,
      } as any);
    }).toThrowError();
  });

  it("should not be able to create a Planet with string on gravity", () => {
    expect(() => {
      new Planet({
        id: "1",
        name: "Terra",
        description: "teste",
        surfaceArea: 1,
        sunDistance: 2,
        durationDay: 3,
        gravity: "Teste com String",
      } as any);
    }).toThrowError();
  });
});
