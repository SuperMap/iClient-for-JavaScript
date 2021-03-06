module("TerrainCurvatureCalculationEventArgs");

//测试使用默认参数值的有效性
test("TestDefaultConstructor", function () {
    expect(2);

    var tsAnalystEventArgs;
    tsAnalystEventArgs = new SuperMap.REST.TerrainCurvatureCalculationEventArgs();

    ok(tsAnalystEventArgs != null, "not null");
    equal(tsAnalystEventArgs.result, undefined, "tsAnalystEventArgs.result");
});

test("TestDefaultConstructor_1", function () {
    expect(5);

    var tsAnalystEventArgs;
    tsAnalystEventArgs = new SuperMap.REST.TerrainCurvatureCalculationEventArgs(new SuperMap.REST.TerrainCurvatureCalculationResult(),"teststring");

    ok(tsAnalystEventArgs != null, "not null");
    ok(tsAnalystEventArgs.result != null, "not null");
    ok(tsAnalystEventArgs.originResult != null, "not null");

    tsAnalystEventArgs.destroy();
    equal(tsAnalystEventArgs.result, null, "tsAnalystEventArgs.result");
    equal(tsAnalystEventArgs.originResult, null, "tsAnalystEventArgs.originResult");
});