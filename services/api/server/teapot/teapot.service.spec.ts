import {Test, TestingModule} from "@nestjs/testing";
import {TeapotService} from "./teapot.service";


describe("UserService", () => {
  let service: TeapotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeapotService],
    }).compile();

    service = module.get<TeapotService>(TeapotService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
