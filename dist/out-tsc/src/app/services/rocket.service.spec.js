import { TestBed } from '@angular/core/testing';
import { RocketService } from './rocket.service';
describe('RocketService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(RocketService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=rocket.service.spec.js.map