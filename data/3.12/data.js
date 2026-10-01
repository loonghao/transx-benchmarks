window.BENCHMARK_DATA = {
  "lastUpdate": 1790872385091,
  "repoUrl": "https://github.com/loonghao/transx",
  "entries": {
    "TransX Performance Benchmarks (Python 3.12)": [
      {
        "commit": {
          "author": {
            "email": "hal.long@outlook.com",
            "name": "longhao",
            "username": "loonghao"
          },
          "committer": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "distinct": true,
          "id": "513701dab90bb14a1f7d5e5e17f2e3f56191b915",
          "message": "chore(workflows): Update benchmark.yml and add index page generation\n\nUpdate benchmark.yml to improve auto-push logic and add a new workflow step to generate an index page for the benchmarks.\n\nSigned-off-by: longhao <hal.long@outlook.com>",
          "timestamp": "2024-12-12T23:34:21+08:00",
          "tree_id": "856183d03a263638286260630f9c521986018bca",
          "url": "https://github.com/loonghao/transx/commit/513701dab90bb14a1f7d5e5e17f2e3f56191b915"
        },
        "date": 1734017738976,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3557.1336088959774,
            "unit": "iter/sec",
            "range": "stddev: 0.000043859691284965165",
            "extra": "mean: 281.12522889191354 usec\nrounds: 983"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 92810.13937067374,
            "unit": "iter/sec",
            "range": "stddev: 9.520939747239458e-7",
            "extra": "mean: 10.774684821947172 usec\nrounds: 1983"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 84113.30669559985,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017089732978694434",
            "extra": "mean: 11.888725331164661 usec\nrounds: 33899"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 84355.0229342099,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035327307850528496",
            "extra": "mean: 11.854658622758233 usec\nrounds: 36631"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1408711.0569431533,
            "unit": "iter/sec",
            "range": "stddev: 6.243122959012627e-8",
            "extra": "mean: 709.8687804509465 nsec\nrounds: 3658"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 91831.47474579765,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015504379229470215",
            "extra": "mean: 10.88951258561555 usec\nrounds: 39371"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 970.1152077360895,
            "unit": "iter/sec",
            "range": "stddev: 0.00006974155134796608",
            "extra": "mean: 1.0308054054050457 msec\nrounds: 888"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 2826.4764596245454,
            "unit": "iter/sec",
            "range": "stddev: 0.000016397483516136562",
            "extra": "mean: 353.79739201253943 usec\nrounds: 2454"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 75525.35304722004,
            "unit": "iter/sec",
            "range": "stddev: 0.000002356324614883358",
            "extra": "mean: 13.240586897684265 usec\nrounds: 36497"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 22812.119263496283,
            "unit": "iter/sec",
            "range": "stddev: 0.000005074141525600728",
            "extra": "mean: 43.83634805908584 usec\nrounds: 13423"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1889.3528350463573,
            "unit": "iter/sec",
            "range": "stddev: 0.00020408221764310242",
            "extra": "mean: 529.2817632845502 usec\nrounds: 1656"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hal.long@outlook.com",
            "name": "longhao",
            "username": "loonghao"
          },
          "committer": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "distinct": true,
          "id": "40a480d4c7ec571c8fccc07ce06394a33a4482db",
          "message": "tests(tests/benchmarks): Add new performance benchmarks for translation operations\n\n- Added benchmarks for translation with nested parameters\n- Added benchmarks for translation with large number of parameters\n- Added benchmarks for frequent locale switches\n- Added benchmarks for memory usage with large number of translations\n\nSigned-off-by: longhao <hal.long@outlook.com>",
          "timestamp": "2024-12-12T23:49:00+08:00",
          "tree_id": "2f3177db43da8ad71aea4f0fc23e07eeaeb8b095",
          "url": "https://github.com/loonghao/transx/commit/40a480d4c7ec571c8fccc07ce06394a33a4482db"
        },
        "date": 1734018618769,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2725.0077856699486,
            "unit": "iter/sec",
            "range": "stddev: 0.00009397067403061311",
            "extra": "mean: 366.971428580395 usec\nrounds: 70"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 79073.48592481451,
            "unit": "iter/sec",
            "range": "stddev: 0.000006090334455382284",
            "extra": "mean: 12.646464087226795 usec\nrounds: 1810"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 77799.33862252123,
            "unit": "iter/sec",
            "range": "stddev: 0.000005536850644518607",
            "extra": "mean: 12.853579705245997 usec\nrounds: 32363"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 80124.3016694835,
            "unit": "iter/sec",
            "range": "stddev: 0.000004704322670179875",
            "extra": "mean: 12.480607994875848 usec\nrounds: 32895"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1334982.3578820068,
            "unit": "iter/sec",
            "range": "stddev: 5.810188903209748e-7",
            "extra": "mean: 749.0735694713844 nsec\nrounds: 3670"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 88486.36171333742,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028801900236392802",
            "extra": "mean: 11.301176595322389 usec\nrounds: 37736"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 897.2856534469205,
            "unit": "iter/sec",
            "range": "stddev: 0.00012623405399473617",
            "extra": "mean: 1.1144722933644404 msec\nrounds: 859"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 772.0799141482546,
            "unit": "iter/sec",
            "range": "stddev: 0.0001347084103094649",
            "extra": "mean: 1.2952027137024837 msec\nrounds: 737"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 55416.55673447317,
            "unit": "iter/sec",
            "range": "stddev: 0.000005227196924728308",
            "extra": "mean: 18.045148578816814 usec\nrounds: 30960"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 1057.7456354886922,
            "unit": "iter/sec",
            "range": "stddev: 0.00010384657124968812",
            "extra": "mean: 945.4068789780325 usec\nrounds: 785"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1715.7800552655906,
            "unit": "iter/sec",
            "range": "stddev: 0.00022441797874468572",
            "extra": "mean: 582.825285170486 usec\nrounds: 1578"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 89142.34420465007,
            "unit": "iter/sec",
            "range": "stddev: 0.0000044423943476076444",
            "extra": "mean: 11.218013267681549 usec\nrounds: 52911"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 68760.16107495947,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043127007691336905",
            "extra": "mean: 14.54330508199132 usec\nrounds: 29851"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 37331.09403041228,
            "unit": "iter/sec",
            "range": "stddev: 0.000006246199454178688",
            "extra": "mean: 26.787321024809412 usec\nrounds: 21232"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 824.733128893705,
            "unit": "iter/sec",
            "range": "stddev: 0.0001640206883277997",
            "extra": "mean: 1.2125134361237526 msec\nrounds: 454"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 90.71702257185709,
            "unit": "iter/sec",
            "range": "stddev: 0.000659616562610493",
            "extra": "mean: 11.023289473680626 msec\nrounds: 95"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hal.long@outlook.com",
            "name": "longhao",
            "username": "loonghao"
          },
          "committer": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "distinct": true,
          "id": "c129133837fd64ccc614941f230af18bfc467074",
          "message": "refactor(core): Add translation and parameter caching for improved performance\n\nSigned-off-by: longhao <hal.long@outlook.com>",
          "timestamp": "2024-12-13T00:21:43+08:00",
          "tree_id": "59f62ae9aedac103ec3c56e3f2d1bb54bb077a89",
          "url": "https://github.com/loonghao/transx/commit/c129133837fd64ccc614941f230af18bfc467074"
        },
        "date": 1734020573671,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3557.3477415351804,
            "unit": "iter/sec",
            "range": "stddev: 0.00004283788594710492",
            "extra": "mean: 281.108306709551 usec\nrounds: 939"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1845169.9126938574,
            "unit": "iter/sec",
            "range": "stddev: 7.493063735668923e-8",
            "extra": "mean: 541.9555094197526 nsec\nrounds: 1933"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 469263.37849121285,
            "unit": "iter/sec",
            "range": "stddev: 0.00005437624557420489",
            "extra": "mean: 2.130999446867609 usec\nrounds: 19881"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 492366.082989353,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037286318807399936",
            "extra": "mean: 2.031009109987018 usec\nrounds: 22832"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1332072.6970575657,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014263981373480252",
            "extra": "mean: 750.7097789849715 nsec\nrounds: 3804"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1865828.8512274534,
            "unit": "iter/sec",
            "range": "stddev: 2.1172611063884763e-7",
            "extra": "mean: 535.9548381632862 nsec\nrounds: 25774"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 29185.46033435748,
            "unit": "iter/sec",
            "range": "stddev: 0.000003378830184282459",
            "extra": "mean: 34.26363636357614 usec\nrounds: 9570"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5669.752218993697,
            "unit": "iter/sec",
            "range": "stddev: 0.00003545904890113495",
            "extra": "mean: 176.37455066378303 usec\nrounds: 3839"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1856397.0906840526,
            "unit": "iter/sec",
            "range": "stddev: 2.3575249580971183e-7",
            "extra": "mean: 538.6778534712721 nsec\nrounds: 21692"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 14620.95324468875,
            "unit": "iter/sec",
            "range": "stddev: 0.000015931643283538126",
            "extra": "mean: 68.39499335402519 usec\nrounds: 2257"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1907.4950046619906,
            "unit": "iter/sec",
            "range": "stddev: 0.00006180512246743673",
            "extra": "mean: 524.2477686997669 usec\nrounds: 1591"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2499761.6734690685,
            "unit": "iter/sec",
            "range": "stddev: 6.320624695444225e-8",
            "extra": "mean: 400.0381358804659 nsec\nrounds: 178572"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 227996.3329830814,
            "unit": "iter/sec",
            "range": "stddev: 0.000009944201201020505",
            "extra": "mean: 4.386035454676394 usec\nrounds: 17036"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 58296.99657900292,
            "unit": "iter/sec",
            "range": "stddev: 0.000005061076919395791",
            "extra": "mean: 17.15354235521928 usec\nrounds: 12407"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 17495.173745237527,
            "unit": "iter/sec",
            "range": "stddev: 0.000005169315139079032",
            "extra": "mean: 57.158620689446785 usec\nrounds: 986"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2783.0084321138474,
            "unit": "iter/sec",
            "range": "stddev: 0.000018467723625364366",
            "extra": "mean: 359.3233812951279 usec\nrounds: 278"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "distinct": true,
          "id": "13c0565f3998741304d99a38c46f4a06bb1004e5",
          "message": "bump: version 0.6.0 → 0.6.1",
          "timestamp": "2024-12-12T16:22:08Z",
          "tree_id": "09ee9a0219ba87c70c96c5fc0f17b3cadc5bb0d4",
          "url": "https://github.com/loonghao/transx/commit/13c0565f3998741304d99a38c46f4a06bb1004e5"
        },
        "date": 1734020607914,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3464.2120666067754,
            "unit": "iter/sec",
            "range": "stddev: 0.000047533665368527365",
            "extra": "mean: 288.6659305991935 usec\nrounds: 951"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1853003.1072410294,
            "unit": "iter/sec",
            "range": "stddev: 7.35170742343364e-8",
            "extra": "mean: 539.6645024999007 nsec\nrounds: 1848"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 481928.54170047166,
            "unit": "iter/sec",
            "range": "stddev: 0.000045979325403001644",
            "extra": "mean: 2.0749964226470743 usec\nrounds: 20965"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 499607.15751956974,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036652702624629753",
            "extra": "mean: 2.0015726054942076 usec\nrounds: 22574"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1374966.7012119703,
            "unit": "iter/sec",
            "range": "stddev: 9.286442804918329e-8",
            "extra": "mean: 727.2903402813652 nsec\nrounds: 3613"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1857723.1391337514,
            "unit": "iter/sec",
            "range": "stddev: 1.2868038484255357e-7",
            "extra": "mean: 538.2933435744876 nsec\nrounds: 25840"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 29339.927879826464,
            "unit": "iter/sec",
            "range": "stddev: 0.000002067644066222793",
            "extra": "mean: 34.08324669698931 usec\nrounds: 9234"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 4766.794860098212,
            "unit": "iter/sec",
            "range": "stddev: 0.000032522434542792785",
            "extra": "mean: 209.78456790133333 usec\nrounds: 3564"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1857013.6047422185,
            "unit": "iter/sec",
            "range": "stddev: 2.9516621884175753e-7",
            "extra": "mean: 538.4990166180366 nsec\nrounds: 22372"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 13071.268756593832,
            "unit": "iter/sec",
            "range": "stddev: 0.000017515872981254238",
            "extra": "mean: 76.5036675950487 usec\nrounds: 2154"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1825.1878064549805,
            "unit": "iter/sec",
            "range": "stddev: 0.00007814854120512504",
            "extra": "mean: 547.8888235300435 usec\nrounds: 1530"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2524991.60095389,
            "unit": "iter/sec",
            "range": "stddev: 6.18246487666442e-8",
            "extra": "mean: 396.0409213330534 nsec\nrounds: 156251"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 222144.77616381223,
            "unit": "iter/sec",
            "range": "stddev: 0.000008770732938655166",
            "extra": "mean: 4.501568829431254 usec\nrounds: 15553"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 53769.622271025924,
            "unit": "iter/sec",
            "range": "stddev: 0.000004672690476915613",
            "extra": "mean: 18.597861724962417 usec\nrounds: 12627"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 17360.60720412847,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031707735223505265",
            "extra": "mean: 57.60167189095743 usec\nrounds: 957"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2772.6961173493223,
            "unit": "iter/sec",
            "range": "stddev: 0.000046271867379622464",
            "extra": "mean: 360.65979021025674 usec\nrounds: 286"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "distinct": true,
          "id": "b34e1d3a8548ad61d289ccfd214dca1afb825792",
          "message": "bump: version 0.6.1 → 0.7.0",
          "timestamp": "2026-03-03T01:27:23Z",
          "tree_id": "ae710064456900b164f8e955ce29140683edb0a4",
          "url": "https://github.com/loonghao/transx/commit/b34e1d3a8548ad61d289ccfd214dca1afb825792"
        },
        "date": 1772501288575,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3536.9195991030956,
            "unit": "iter/sec",
            "range": "stddev: 0.000044967318451170536",
            "extra": "mean: 282.7319004519027 usec\nrounds: 884"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1806919.336784598,
            "unit": "iter/sec",
            "range": "stddev: 6.124551413968548e-7",
            "extra": "mean: 553.4281357459454 nsec\nrounds: 1969"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 481268.38787905016,
            "unit": "iter/sec",
            "range": "stddev: 0.000043716454352067484",
            "extra": "mean: 2.077842686503886 usec\nrounds: 21740"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 495107.1046332766,
            "unit": "iter/sec",
            "range": "stddev: 0.000003528376025352922",
            "extra": "mean: 2.019764997597227 usec\nrounds: 18553"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1343897.4233602688,
            "unit": "iter/sec",
            "range": "stddev: 7.741968399075295e-7",
            "extra": "mean: 744.1044105134224 nsec\nrounds: 3333"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1884384.7162463972,
            "unit": "iter/sec",
            "range": "stddev: 3.543154248918357e-7",
            "extra": "mean: 530.6771973782252 nsec\nrounds: 25576"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 29060.164607723324,
            "unit": "iter/sec",
            "range": "stddev: 0.0000071667083281941654",
            "extra": "mean: 34.41136736487136 usec\nrounds: 10363"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5694.217039551459,
            "unit": "iter/sec",
            "range": "stddev: 0.00003335329596531812",
            "extra": "mean: 175.616769268558 usec\nrounds: 4061"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1887676.6489246765,
            "unit": "iter/sec",
            "range": "stddev: 4.086365780268673e-7",
            "extra": "mean: 529.7517456549853 nsec\nrounds: 23202"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 14150.526765117256,
            "unit": "iter/sec",
            "range": "stddev: 0.000021006075161846397",
            "extra": "mean: 70.66874729109873 usec\nrounds: 2307"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1837.6321722204716,
            "unit": "iter/sec",
            "range": "stddev: 0.00007435562797572405",
            "extra": "mean: 544.1785440617678 usec\nrounds: 1566"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2498207.2757913577,
            "unit": "iter/sec",
            "range": "stddev: 1.1596694745337959e-7",
            "extra": "mean: 400.2870417080303 nsec\nrounds: 99010"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 223707.6879460301,
            "unit": "iter/sec",
            "range": "stddev: 0.000006165660244503063",
            "extra": "mean: 4.470119061090345 usec\nrounds: 17302"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 58112.698688056866,
            "unit": "iter/sec",
            "range": "stddev: 0.000005235329486037597",
            "extra": "mean: 17.20794288642315 usec\nrounds: 11696"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 17653.62882167458,
            "unit": "iter/sec",
            "range": "stddev: 0.000009469306980148626",
            "extra": "mean: 56.6455775241083 usec\nrounds: 961"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2773.8147805428507,
            "unit": "iter/sec",
            "range": "stddev: 0.00004402920341047203",
            "extra": "mean: 360.5143382372108 usec\nrounds: 272"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hal.long@outlook.com",
            "name": "longhao",
            "username": "loonghao"
          },
          "committer": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "distinct": true,
          "id": "5c332e1d5ae462437c64289535606d7a687943e3",
          "message": "feat: improve custom keyword extraction and gettext output stability",
          "timestamp": "2026-03-03T09:26:42+08:00",
          "tree_id": "00f4037f0df04d43e7da3ba37dcc021ce83ecdce",
          "url": "https://github.com/loonghao/transx/commit/5c332e1d5ae462437c64289535606d7a687943e3"
        },
        "date": 1772501300068,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3526.3789977808588,
            "unit": "iter/sec",
            "range": "stddev: 0.000041645084684833275",
            "extra": "mean: 283.5770065070423 usec\nrounds: 461"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1919504.6498225485,
            "unit": "iter/sec",
            "range": "stddev: 6.7635118997265e-8",
            "extra": "mean: 520.967740345118 nsec\nrounds: 1736"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 445663.61040605034,
            "unit": "iter/sec",
            "range": "stddev: 0.00006775773450606744",
            "extra": "mean: 2.2438448566372426 usec\nrounds: 18383"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 490575.73611288454,
            "unit": "iter/sec",
            "range": "stddev: 0.000003852841685052458",
            "extra": "mean: 2.038421239345384 usec\nrounds: 11262"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1372003.7810090708,
            "unit": "iter/sec",
            "range": "stddev: 1.4649888002538326e-7",
            "extra": "mean: 728.8609651385419 nsec\nrounds: 2467"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1888508.0098094833,
            "unit": "iter/sec",
            "range": "stddev: 5.245553648995056e-7",
            "extra": "mean: 529.5185378116994 nsec\nrounds: 24571"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 28695.48135067025,
            "unit": "iter/sec",
            "range": "stddev: 0.000006429247112663364",
            "extra": "mean: 34.84869230035211 usec\nrounds: 9597"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5180.504470837311,
            "unit": "iter/sec",
            "range": "stddev: 0.00006936541504398855",
            "extra": "mean: 193.03139407162269 usec\nrounds: 1822"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1262122.3029765477,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025380319184133987",
            "extra": "mean: 792.3162419692869 nsec\nrounds: 13496"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 13418.942791245163,
            "unit": "iter/sec",
            "range": "stddev: 0.000030072790483011113",
            "extra": "mean: 74.52151898675831 usec\nrounds: 1264"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1553.8850490323484,
            "unit": "iter/sec",
            "range": "stddev: 0.0006044598497784309",
            "extra": "mean: 643.5482474219895 usec\nrounds: 1455"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1849375.3407395335,
            "unit": "iter/sec",
            "range": "stddev: 0.000005533657632961793",
            "extra": "mean: 540.7231176771921 nsec\nrounds: 104167"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 216822.72490011595,
            "unit": "iter/sec",
            "range": "stddev: 0.000007723275351574355",
            "extra": "mean: 4.612062690664327 usec\nrounds: 17036"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 49635.107630463426,
            "unit": "iter/sec",
            "range": "stddev: 0.00009012157028746666",
            "extra": "mean: 20.14702994995124 usec\nrounds: 12020"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 12752.673679659976,
            "unit": "iter/sec",
            "range": "stddev: 0.00020275825607159585",
            "extra": "mean: 78.4149289097675 usec\nrounds: 844"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2688.533405031195,
            "unit": "iter/sec",
            "range": "stddev: 0.00008644113974734364",
            "extra": "mean: 371.9499999994968 usec\nrounds: 274"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hal.long@outlook.com",
            "name": "longhao",
            "username": "loonghao"
          },
          "committer": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "distinct": true,
          "id": "35ecc9f8bbf591d9d84f0b3b5dd64ae23fce8577",
          "message": "fix: resolve remaining isort and ruff lint errors",
          "timestamp": "2026-03-07T12:51:52+08:00",
          "tree_id": "9f44ff474bd609e02e2efd626b79c7f04028f99e",
          "url": "https://github.com/loonghao/transx/commit/35ecc9f8bbf591d9d84f0b3b5dd64ae23fce8577"
        },
        "date": 1772859161431,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3298.4299473483297,
            "unit": "iter/sec",
            "range": "stddev: 0.000039636023154725836",
            "extra": "mean: 303.1745454542453 usec\nrounds: 770"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1764819.0894231163,
            "unit": "iter/sec",
            "range": "stddev: 4.497788605426221e-7",
            "extra": "mean: 566.6303169504359 nsec\nrounds: 1834"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 482344.589165516,
            "unit": "iter/sec",
            "range": "stddev: 0.00004404266090274508",
            "extra": "mean: 2.073206629580022 usec\nrounds: 22625"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 502179.46202691324,
            "unit": "iter/sec",
            "range": "stddev: 0.000003584160511203565",
            "extra": "mean: 1.9913199874080219 usec\nrounds: 25576"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1388955.106093205,
            "unit": "iter/sec",
            "range": "stddev: 7.879686120975631e-7",
            "extra": "mean: 719.9656746377917 nsec\nrounds: 3496"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1858032.2368601952,
            "unit": "iter/sec",
            "range": "stddev: 4.6692929626436846e-7",
            "extra": "mean: 538.2037944023268 nsec\nrounds: 32680"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 28431.312551829822,
            "unit": "iter/sec",
            "range": "stddev: 0.000003945142696826358",
            "extra": "mean: 35.172488015705085 usec\nrounds: 10639"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5488.5474623262535,
            "unit": "iter/sec",
            "range": "stddev: 0.00003448217324052131",
            "extra": "mean: 182.19756809320955 usec\nrounds: 4112"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1847987.3603503995,
            "unit": "iter/sec",
            "range": "stddev: 4.5923873259112887e-7",
            "extra": "mean: 541.1292422532524 nsec\nrounds: 23042"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 14464.052149734658,
            "unit": "iter/sec",
            "range": "stddev: 0.000017091349074667476",
            "extra": "mean: 69.1369188694708 usec\nrounds: 2194"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1762.5624194591167,
            "unit": "iter/sec",
            "range": "stddev: 0.00006183665952800938",
            "extra": "mean: 567.3557934514871 usec\nrounds: 1588"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2387450.6852589385,
            "unit": "iter/sec",
            "range": "stddev: 1.3115388313064259e-7",
            "extra": "mean: 418.85681918977184 nsec\nrounds: 169492"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 228061.16606221677,
            "unit": "iter/sec",
            "range": "stddev: 0.000005144881835469614",
            "extra": "mean: 4.384788595385821 usec\nrounds: 18519"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 57766.979803376315,
            "unit": "iter/sec",
            "range": "stddev: 0.000005704222348436637",
            "extra": "mean: 17.310927512633317 usec\nrounds: 14706"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 17135.782329668375,
            "unit": "iter/sec",
            "range": "stddev: 0.000009616658386570766",
            "extra": "mean: 58.357417289821086 usec\nrounds: 937"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2797.841174283594,
            "unit": "iter/sec",
            "range": "stddev: 0.00001656509373394945",
            "extra": "mean: 357.41843003509905 usec\nrounds: 293"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "distinct": true,
          "id": "bcde35145ee83857bf73d6ba8c336294c3d8eb92",
          "message": "bump: version 0.7.0 → 0.8.0",
          "timestamp": "2026-03-07T04:52:13Z",
          "tree_id": "9ee97693543466938cef98964b718e3ea941944b",
          "url": "https://github.com/loonghao/transx/commit/bcde35145ee83857bf73d6ba8c336294c3d8eb92"
        },
        "date": 1772859184607,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3282.854217504224,
            "unit": "iter/sec",
            "range": "stddev: 0.00004754163107130707",
            "extra": "mean: 304.612978142004 usec\nrounds: 732"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1897633.9935517372,
            "unit": "iter/sec",
            "range": "stddev: 9.420717326780744e-8",
            "extra": "mean: 526.9720100915424 nsec\nrounds: 1965"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 465394.69273635134,
            "unit": "iter/sec",
            "range": "stddev: 0.00005481979525152604",
            "extra": "mean: 2.148713802730246 usec\nrounds: 20409"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 502151.60225780506,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034843304775389393",
            "extra": "mean: 1.9914304674200742 usec\nrounds: 21098"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1374613.3121506942,
            "unit": "iter/sec",
            "range": "stddev: 1.289446118058706e-7",
            "extra": "mean: 727.4773139185004 nsec\nrounds: 2755"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1829588.7621393444,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023659089153549012",
            "extra": "mean: 546.5709129250972 nsec\nrounds: 26596"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 28853.129969333648,
            "unit": "iter/sec",
            "range": "stddev: 0.000004644138812298238",
            "extra": "mean: 34.65828494388107 usec\nrounds: 9644"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5602.178990274191,
            "unit": "iter/sec",
            "range": "stddev: 0.00003383154578777955",
            "extra": "mean: 178.50197248893264 usec\nrounds: 3853"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1808594.1697203277,
            "unit": "iter/sec",
            "range": "stddev: 7.408975377614544e-7",
            "extra": "mean: 552.9156384235359 nsec\nrounds: 21882"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 14357.67060401386,
            "unit": "iter/sec",
            "range": "stddev: 0.00001818578669134187",
            "extra": "mean: 69.64918109490812 usec\nrounds: 2137"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1757.6755952056837,
            "unit": "iter/sec",
            "range": "stddev: 0.00007863709123990533",
            "extra": "mean: 568.9331994639089 usec\nrounds: 1494"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2413136.435592195,
            "unit": "iter/sec",
            "range": "stddev: 1.602627036448273e-7",
            "extra": "mean: 414.39845060173536 nsec\nrounds: 163935"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 222807.04251999484,
            "unit": "iter/sec",
            "range": "stddev: 0.000010298460224636768",
            "extra": "mean: 4.48818847326273 usec\nrounds: 17212"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 57714.503866748346,
            "unit": "iter/sec",
            "range": "stddev: 0.00000500545535705325",
            "extra": "mean: 17.32666718072821 usec\nrounds: 12971"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 17165.18407592279,
            "unit": "iter/sec",
            "range": "stddev: 0.000005026187193089627",
            "extra": "mean: 58.25745856129077 usec\nrounds: 905"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2828.157501005942,
            "unit": "iter/sec",
            "range": "stddev: 0.00003192724944796961",
            "extra": "mean: 353.5870967738932 usec\nrounds: 279"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "distinct": true,
          "id": "4d153c5637e1c06a28611af0c6b117bfa3d9da4b",
          "message": "chore(deps): update actions/setup-python action to v6",
          "timestamp": "2026-03-07T12:56:48+08:00",
          "tree_id": "215077217c75f99000d7fb8a7cd946488234dc2c",
          "url": "https://github.com/loonghao/transx/commit/4d153c5637e1c06a28611af0c6b117bfa3d9da4b"
        },
        "date": 1772859457051,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3307.3626818158646,
            "unit": "iter/sec",
            "range": "stddev: 0.000048494053408776764",
            "extra": "mean: 302.35571245272774 usec\nrounds: 779"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1870203.692904958,
            "unit": "iter/sec",
            "range": "stddev: 1.6609917928123145e-7",
            "extra": "mean: 534.7011150676939 nsec\nrounds: 1974"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 492262.3615881159,
            "unit": "iter/sec",
            "range": "stddev: 0.00004226239803193667",
            "extra": "mean: 2.0314370507097927 usec\nrounds: 23924"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 499546.8914793817,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034569489769296535",
            "extra": "mean: 2.001814078030899 usec\nrounds: 23924"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1381657.3082243556,
            "unit": "iter/sec",
            "range": "stddev: 3.7076115743853816e-7",
            "extra": "mean: 723.7684728676718 nsec\nrounds: 3248"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1870681.5665709737,
            "unit": "iter/sec",
            "range": "stddev: 3.1212011573461205e-7",
            "extra": "mean: 534.564523364089 nsec\nrounds: 26316"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 28940.66765662569,
            "unit": "iter/sec",
            "range": "stddev: 0.000006778475286641541",
            "extra": "mean: 34.55345301168474 usec\nrounds: 10194"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5685.948692963942,
            "unit": "iter/sec",
            "range": "stddev: 0.00003414808394201509",
            "extra": "mean: 175.87214623259732 usec\nrounds: 4021"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1894806.717276238,
            "unit": "iter/sec",
            "range": "stddev: 5.112251048661356e-7",
            "extra": "mean: 527.7583148098018 nsec\nrounds: 21979"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 14275.327259662492,
            "unit": "iter/sec",
            "range": "stddev: 0.000017784749869182818",
            "extra": "mean: 70.0509334609568 usec\nrounds: 2089"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1761.2278866457623,
            "unit": "iter/sec",
            "range": "stddev: 0.00007055147315244479",
            "extra": "mean: 567.785695185924 usec\nrounds: 1496"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2432652.7514189878,
            "unit": "iter/sec",
            "range": "stddev: 1.5365200559163335e-7",
            "extra": "mean: 411.0738778548196 nsec\nrounds: 166667"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 224806.3403587509,
            "unit": "iter/sec",
            "range": "stddev: 0.000009361654805314557",
            "extra": "mean: 4.448273115447625 usec\nrounds: 17575"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 57537.39386036668,
            "unit": "iter/sec",
            "range": "stddev: 0.000005104540546370059",
            "extra": "mean: 17.38000164600481 usec\nrounds: 12151"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 17370.697588816634,
            "unit": "iter/sec",
            "range": "stddev: 0.000006686903544924564",
            "extra": "mean: 57.56821192050493 usec\nrounds: 906"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2848.4159233967025,
            "unit": "iter/sec",
            "range": "stddev: 0.000015507857320007455",
            "extra": "mean: 351.07232472128294 usec\nrounds: 271"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "distinct": true,
          "id": "27a3699cfb8a999c695ca743a518056689446b8a",
          "message": "chore(deps): update dependency ubuntu to v24",
          "timestamp": "2026-03-07T12:57:17+08:00",
          "tree_id": "b47fb15a48da1273424894c8d0b6d8d6884ffbbd",
          "url": "https://github.com/loonghao/transx/commit/27a3699cfb8a999c695ca743a518056689446b8a"
        },
        "date": 1772859482798,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3286.3556712475415,
            "unit": "iter/sec",
            "range": "stddev: 0.00007019728688304775",
            "extra": "mean: 304.2884276796454 usec\nrounds: 795"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1919510.5610685572,
            "unit": "iter/sec",
            "range": "stddev: 7.818100676063977e-8",
            "extra": "mean: 520.9661359942286 nsec\nrounds: 2008"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 485866.9184261124,
            "unit": "iter/sec",
            "range": "stddev: 0.000043851831010961356",
            "extra": "mean: 2.0581767600875955 usec\nrounds: 23365"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 492073.79660887155,
            "unit": "iter/sec",
            "range": "stddev: 0.000004218442853957446",
            "extra": "mean: 2.032215506884341 usec\nrounds: 25317"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1266048.2357063827,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021913069561035006",
            "extra": "mean: 789.8593211514229 nsec\nrounds: 3412"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1871435.632842034,
            "unit": "iter/sec",
            "range": "stddev: 4.671409517520085e-7",
            "extra": "mean: 534.349128792296 nsec\nrounds: 26810"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 28893.720725064464,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036898378860524498",
            "extra": "mean: 34.609595957384926 usec\nrounds: 10494"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5541.473622607832,
            "unit": "iter/sec",
            "range": "stddev: 0.00004123611100466382",
            "extra": "mean: 180.45741405684024 usec\nrounds: 1949"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1909603.6393684002,
            "unit": "iter/sec",
            "range": "stddev: 4.409662743471388e-7",
            "extra": "mean: 523.6688804859783 nsec\nrounds: 19570"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 14510.728554758305,
            "unit": "iter/sec",
            "range": "stddev: 0.000016782150499279186",
            "extra": "mean: 68.91452735997075 usec\nrounds: 2010"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1773.9139109642185,
            "unit": "iter/sec",
            "range": "stddev: 0.00006573340645640246",
            "extra": "mean: 563.7252145209492 usec\nrounds: 1515"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2416546.562194916,
            "unit": "iter/sec",
            "range": "stddev: 1.4100994277088259e-7",
            "extra": "mean: 413.8136693264101 nsec\nrounds: 172414"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 232075.70630085134,
            "unit": "iter/sec",
            "range": "stddev: 0.000005766548464592032",
            "extra": "mean: 4.308938733568477 usec\nrounds: 17922"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 57784.89721070828,
            "unit": "iter/sec",
            "range": "stddev: 0.000006418034040340133",
            "extra": "mean: 17.305559900082113 usec\nrounds: 12788"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 17335.76100414975,
            "unit": "iter/sec",
            "range": "stddev: 0.000005404934856556634",
            "extra": "mean: 57.68422855856313 usec\nrounds: 875"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2824.9908034641303,
            "unit": "iter/sec",
            "range": "stddev: 0.00001979094747694934",
            "extra": "mean: 353.9834532465576 usec\nrounds: 278"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "distinct": true,
          "id": "a75dfd198d8c29623311d40d0c63edba96e98652",
          "message": "chore(deps): update actions/checkout action to v6",
          "timestamp": "2026-03-07T12:57:39+08:00",
          "tree_id": "c79c817fdf63faba4188a61f454e8336108e6f41",
          "url": "https://github.com/loonghao/transx/commit/a75dfd198d8c29623311d40d0c63edba96e98652"
        },
        "date": 1772859512834,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3320.4462038741203,
            "unit": "iter/sec",
            "range": "stddev: 0.00004489213517827785",
            "extra": "mean: 301.1643431636546 usec\nrounds: 746"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1831764.82163952,
            "unit": "iter/sec",
            "range": "stddev: 5.502076459357695e-7",
            "extra": "mean: 545.9216096883827 nsec\nrounds: 1888"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 465920.64097127615,
            "unit": "iter/sec",
            "range": "stddev: 0.00004965648525556005",
            "extra": "mean: 2.146288256118813 usec\nrounds: 18657"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 490437.3310838943,
            "unit": "iter/sec",
            "range": "stddev: 0.000003782879230826663",
            "extra": "mean: 2.038996496840775 usec\nrounds: 23697"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1365269.46322363,
            "unit": "iter/sec",
            "range": "stddev: 3.223457850604913e-7",
            "extra": "mean: 732.4561391996803 nsec\nrounds: 3420"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1863623.5564575605,
            "unit": "iter/sec",
            "range": "stddev: 4.410860033890472e-7",
            "extra": "mean: 536.5890533712904 nsec\nrounds: 26456"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 28492.060303170892,
            "unit": "iter/sec",
            "range": "stddev: 0.000003644826628618707",
            "extra": "mean: 35.09749696439852 usec\nrounds: 10707"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5630.346293524607,
            "unit": "iter/sec",
            "range": "stddev: 0.00003346705958224433",
            "extra": "mean: 177.60896894567352 usec\nrounds: 4025"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1852571.1254767487,
            "unit": "iter/sec",
            "range": "stddev: 3.28789604134125e-7",
            "extra": "mean: 539.7903412440673 nsec\nrounds: 22322"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 14338.919685013743,
            "unit": "iter/sec",
            "range": "stddev: 0.000016750708658376762",
            "extra": "mean: 69.74026090997256 usec\nrounds: 2223"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1753.6674347603334,
            "unit": "iter/sec",
            "range": "stddev: 0.00006667160020195453",
            "extra": "mean: 570.2335460980182 usec\nrounds: 1410"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2381472.2548145326,
            "unit": "iter/sec",
            "range": "stddev: 1.393544313551454e-7",
            "extra": "mean: 419.9083142700225 nsec\nrounds: 169492"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 223032.33976868232,
            "unit": "iter/sec",
            "range": "stddev: 0.00000828599582641528",
            "extra": "mean: 4.4836547069234385 usec\nrounds: 16751"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 57786.95589783299,
            "unit": "iter/sec",
            "range": "stddev: 0.000004879078706067828",
            "extra": "mean: 17.304943381478587 usec\nrounds: 12805"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 17284.827180830285,
            "unit": "iter/sec",
            "range": "stddev: 0.000004517751714576678",
            "extra": "mean: 57.854208754198524 usec\nrounds: 891"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2759.9089230173795,
            "unit": "iter/sec",
            "range": "stddev: 0.000013647093357671293",
            "extra": "mean: 362.33079709989505 usec\nrounds: 276"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4ae2d1555c4227a384a78e1de3da749408630c7a",
          "message": "fix(translate): honour Retry-After and add jitter to rate-limit backoff (#41)\n\nFixes #38",
          "timestamp": "2026-09-25T19:09:57+08:00",
          "tree_id": "e6179664184812c035c84e509e00b9e899b32953",
          "url": "https://github.com/loonghao/transx/commit/4ae2d1555c4227a384a78e1de3da749408630c7a"
        },
        "date": 1790334639930,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3143.255159219557,
            "unit": "iter/sec",
            "range": "stddev: 0.00031456897217813784",
            "extra": "mean: 318.1415282392446 usec\nrounds: 1204"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1836388.683022808,
            "unit": "iter/sec",
            "range": "stddev: 1.0583706154218561e-7",
            "extra": "mean: 544.5470282216828 nsec\nrounds: 1733"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 559158.3660015705,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035172084579444617",
            "extra": "mean: 1.7884021071718907 usec\nrounds: 22780"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 486660.3028991524,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033988186926685915",
            "extra": "mean: 2.054821389874538 usec\nrounds: 23095"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1364567.3327128335,
            "unit": "iter/sec",
            "range": "stddev: 4.977310206060816e-7",
            "extra": "mean: 732.8330204211661 nsec\nrounds: 3198"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1857466.8408162794,
            "unit": "iter/sec",
            "range": "stddev: 4.378548898691804e-7",
            "extra": "mean: 538.3676187514291 nsec\nrounds: 27028"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 28377.06445198654,
            "unit": "iter/sec",
            "range": "stddev: 0.000005117881568600687",
            "extra": "mean: 35.239726846727976 usec\nrounds: 10031"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5560.150699583999,
            "unit": "iter/sec",
            "range": "stddev: 0.000038301970022635016",
            "extra": "mean: 179.8512403764197 usec\nrounds: 3507"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1855378.563384628,
            "unit": "iter/sec",
            "range": "stddev: 4.6687211468770646e-7",
            "extra": "mean: 538.9735656834231 nsec\nrounds: 21979"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 14143.7788781152,
            "unit": "iter/sec",
            "range": "stddev: 0.00002253418903915902",
            "extra": "mean: 70.7024628013175 usec\nrounds: 1949"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1759.0921501688827,
            "unit": "iter/sec",
            "range": "stddev: 0.00006865117973799489",
            "extra": "mean: 568.4750511245215 usec\nrounds: 1467"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2420442.9107405026,
            "unit": "iter/sec",
            "range": "stddev: 1.4281096432538783e-7",
            "extra": "mean: 413.1475258361137 nsec\nrounds: 181819"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 218270.7067585164,
            "unit": "iter/sec",
            "range": "stddev: 0.000008941076378510465",
            "extra": "mean: 4.581466816371054 usec\nrounds: 16921"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 57741.898779895884,
            "unit": "iter/sec",
            "range": "stddev: 0.000005003346318044359",
            "extra": "mean: 17.318446762754743 usec\nrounds: 12078"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 17040.373268829804,
            "unit": "iter/sec",
            "range": "stddev: 0.000006374095500992238",
            "extra": "mean: 58.68416050657744 usec\nrounds: 947"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2788.437955728718,
            "unit": "iter/sec",
            "range": "stddev: 0.000014101715247114946",
            "extra": "mean: 358.6237226277694 usec\nrounds: 274"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "distinct": true,
          "id": "0af1bb597c48fb5b807a951174ec0a9a8630122e",
          "message": "bump: version 0.8.0 → 0.8.1",
          "timestamp": "2026-09-25T11:10:54Z",
          "tree_id": "e542eef30f43b9ce320d43248e30237513220969",
          "url": "https://github.com/loonghao/transx/commit/0af1bb597c48fb5b807a951174ec0a9a8630122e"
        },
        "date": 1790334694368,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3283.7726250692485,
            "unit": "iter/sec",
            "range": "stddev: 0.000044976803014902976",
            "extra": "mean: 304.5277837952961 usec\nrounds: 925"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1766924.0467239977,
            "unit": "iter/sec",
            "range": "stddev: 8.344937299227901e-7",
            "extra": "mean: 565.9552836207481 nsec\nrounds: 1968"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 477872.0476544501,
            "unit": "iter/sec",
            "range": "stddev: 0.00004413685020140914",
            "extra": "mean: 2.092610364862984 usec\nrounds: 21882"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 463600.5653781649,
            "unit": "iter/sec",
            "range": "stddev: 0.000016172215169504346",
            "extra": "mean: 2.157029293491666 usec\nrounds: 27549"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1376028.0818597956,
            "unit": "iter/sec",
            "range": "stddev: 8.883287669108591e-8",
            "extra": "mean: 726.7293547152263 nsec\nrounds: 2978"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1870412.6320673728,
            "unit": "iter/sec",
            "range": "stddev: 4.143874406918341e-7",
            "extra": "mean: 534.6413849304989 nsec\nrounds: 29586"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 28662.107870852917,
            "unit": "iter/sec",
            "range": "stddev: 0.000004434241996770631",
            "extra": "mean: 34.88926929260916 usec\nrounds: 10661"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5423.93556324559,
            "unit": "iter/sec",
            "range": "stddev: 0.00003678752825140517",
            "extra": "mean: 184.36797198999489 usec\nrounds: 3856"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1813203.1669261747,
            "unit": "iter/sec",
            "range": "stddev: 2.1901926459893762e-7",
            "extra": "mean: 551.5101772600838 nsec\nrounds: 21322"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 13874.313076283659,
            "unit": "iter/sec",
            "range": "stddev: 0.00001856707705047921",
            "extra": "mean: 72.07564039400052 usec\nrounds: 2069"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1712.9798116129982,
            "unit": "iter/sec",
            "range": "stddev: 0.00009892524869063053",
            "extra": "mean: 583.7780417612553 usec\nrounds: 1389"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2399834.647680924,
            "unit": "iter/sec",
            "range": "stddev: 1.3466219024415573e-7",
            "extra": "mean: 416.69537564446296 nsec\nrounds: 175439"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 194795.38132697568,
            "unit": "iter/sec",
            "range": "stddev: 0.000008461651467105875",
            "extra": "mean: 5.133591942415927 usec\nrounds: 17272"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 57405.31213221733,
            "unit": "iter/sec",
            "range": "stddev: 0.000004804936248397392",
            "extra": "mean: 17.419990639486034 usec\nrounds: 12821"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 17223.995184750052,
            "unit": "iter/sec",
            "range": "stddev: 0.0000058856668938026996",
            "extra": "mean: 58.05853922238609 usec\nrounds: 931"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2832.255707491516,
            "unit": "iter/sec",
            "range": "stddev: 0.000013132231908573539",
            "extra": "mean: 353.0754646746512 usec\nrounds: 269"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fb24c14c52088b25430863040500a321c7e7703f",
          "message": "fix(pot): regenerate locations and header on re-extract (#40)\n\nFixes #39",
          "timestamp": "2026-09-25T19:11:12+08:00",
          "tree_id": "3c44e0b33bae8bd9f377551dddd7c1d39804e420",
          "url": "https://github.com/loonghao/transx/commit/fb24c14c52088b25430863040500a321c7e7703f"
        },
        "date": 1790334711768,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3695.466140009795,
            "unit": "iter/sec",
            "range": "stddev: 0.000047132428871581886",
            "extra": "mean: 270.6018570088561 usec\nrounds: 1077"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1948577.8997475163,
            "unit": "iter/sec",
            "range": "stddev: 4.288720439487738e-7",
            "extra": "mean: 513.1947766263661 nsec\nrounds: 2069"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 556563.9010650349,
            "unit": "iter/sec",
            "range": "stddev: 0.000003719618456036636",
            "extra": "mean: 1.7967388795543697 usec\nrounds: 12971"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 416842.46909028053,
            "unit": "iter/sec",
            "range": "stddev: 0.000004140026646177983",
            "extra": "mean: 2.3989878051111395 usec\nrounds: 20747"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1419436.8610950029,
            "unit": "iter/sec",
            "range": "stddev: 7.25999920323041e-7",
            "extra": "mean: 704.5047422740349 nsec\nrounds: 3796"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 2021376.6098213473,
            "unit": "iter/sec",
            "range": "stddev: 3.7703003477170774e-7",
            "extra": "mean: 494.71236341672204 nsec\nrounds: 24510"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 31083.306323329638,
            "unit": "iter/sec",
            "range": "stddev: 0.0000069183050720233325",
            "extra": "mean: 32.17160972510341 usec\nrounds: 9542"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5402.295139455585,
            "unit": "iter/sec",
            "range": "stddev: 0.000039516300748111716",
            "extra": "mean: 185.10651013798085 usec\nrounds: 1874"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1713049.3698750373,
            "unit": "iter/sec",
            "range": "stddev: 0.0000050226520456322955",
            "extra": "mean: 583.7543374905462 nsec\nrounds: 14410"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 14470.9609005696,
            "unit": "iter/sec",
            "range": "stddev: 0.00001841916034972086",
            "extra": "mean: 69.10391140374365 usec\nrounds: 2122"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1958.059060114768,
            "unit": "iter/sec",
            "range": "stddev: 0.00008237615888745963",
            "extra": "mean: 510.7098250353014 usec\nrounds: 1486"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2585267.484726364,
            "unit": "iter/sec",
            "range": "stddev: 1.2464004674989242e-7",
            "extra": "mean: 386.80717020886703 nsec\nrounds: 178572"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 226768.67804622953,
            "unit": "iter/sec",
            "range": "stddev: 0.00000692209886389793",
            "extra": "mean: 4.409780083456402 usec\nrounds: 16779"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 56996.33548534618,
            "unit": "iter/sec",
            "range": "stddev: 0.000004975513962397558",
            "extra": "mean: 17.544987611652704 usec\nrounds: 10494"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 15088.18906690104,
            "unit": "iter/sec",
            "range": "stddev: 0.00002024635779025937",
            "extra": "mean: 66.27700617787855 usec\nrounds: 648"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2841.325300753517,
            "unit": "iter/sec",
            "range": "stddev: 0.00005848235327529238",
            "extra": "mean: 351.94843748964644 usec\nrounds: 256"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "distinct": true,
          "id": "d0cb9c8a8b5d4eefc3fd9656d665b4cfbddd56ec",
          "message": "bump: version 0.8.1 → 0.8.2",
          "timestamp": "2026-09-25T11:11:38Z",
          "tree_id": "b1db204df621ebdb39878a8a4e80327af6ded70e",
          "url": "https://github.com/loonghao/transx/commit/d0cb9c8a8b5d4eefc3fd9656d665b4cfbddd56ec"
        },
        "date": 1790334746725,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3212.704366639834,
            "unit": "iter/sec",
            "range": "stddev: 0.00005217150274525534",
            "extra": "mean: 311.2642452831411 usec\nrounds: 1060"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1792617.018738585,
            "unit": "iter/sec",
            "range": "stddev: 1.280499088997681e-7",
            "extra": "mean: 557.8436384050801 nsec\nrounds: 1957"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 442625.0508006072,
            "unit": "iter/sec",
            "range": "stddev: 0.00005800161422678561",
            "extra": "mean: 2.2592485404773845 usec\nrounds: 20041"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 483743.30843169295,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034012376441243723",
            "extra": "mean: 2.067212057655171 usec\nrounds: 24814"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1359088.6161400354,
            "unit": "iter/sec",
            "range": "stddev: 3.8146628837603527e-7",
            "extra": "mean: 735.7871945393175 nsec\nrounds: 3233"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1840973.999055879,
            "unit": "iter/sec",
            "range": "stddev: 3.244304589402141e-7",
            "extra": "mean: 543.1907243192124 nsec\nrounds: 24753"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 27517.24037766877,
            "unit": "iter/sec",
            "range": "stddev: 0.000024693658310142142",
            "extra": "mean: 36.340853453151354 usec\nrounds: 8905"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5464.4505811696745,
            "unit": "iter/sec",
            "range": "stddev: 0.00003203646962554779",
            "extra": "mean: 183.00101449283275 usec\nrounds: 3450"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1824664.924493325,
            "unit": "iter/sec",
            "range": "stddev: 4.1316364407899505e-7",
            "extra": "mean: 548.0458283471861 nsec\nrounds: 21646"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 13955.142224806015,
            "unit": "iter/sec",
            "range": "stddev: 0.000017537095438619727",
            "extra": "mean: 71.6581733020568 usec\nrounds: 2135"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1726.5216046239823,
            "unit": "iter/sec",
            "range": "stddev: 0.00007091069274370264",
            "extra": "mean: 579.1992392807557 usec\nrounds: 1446"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2364566.711432637,
            "unit": "iter/sec",
            "range": "stddev: 1.1831735386139104e-7",
            "extra": "mean: 422.9104618469921 nsec\nrounds: 169492"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 216390.39887261117,
            "unit": "iter/sec",
            "range": "stddev: 0.000010477210203352525",
            "extra": "mean: 4.621277123245654 usec\nrounds: 16130"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 54352.07428958986,
            "unit": "iter/sec",
            "range": "stddev: 0.000006340035541624083",
            "extra": "mean: 18.398561840932935 usec\nrounds: 12516"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 17253.567534435293,
            "unit": "iter/sec",
            "range": "stddev: 0.000004875120652088778",
            "extra": "mean: 57.95902777811974 usec\nrounds: 864"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2780.0281944604353,
            "unit": "iter/sec",
            "range": "stddev: 0.00001541880634221204",
            "extra": "mean: 359.7085820901489 usec\nrounds: 268"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "83dec3f9889c6926670b61527f49b43cab794bf3",
          "message": "perf: faster PO/POT/MO parsing and less duplicated work (#43)\n\nSpeeds up PO/POT/MO parsing and removes duplicated work across the translation hot path.",
          "timestamp": "2026-09-25T22:04:04+08:00",
          "tree_id": "a5340d6efbb886961d09b1f80c4c32885721d113",
          "url": "https://github.com/loonghao/transx/commit/83dec3f9889c6926670b61527f49b43cab794bf3"
        },
        "date": 1790345096138,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 299.3114991067312,
            "unit": "iter/sec",
            "range": "stddev: 0.0014613441552526224",
            "extra": "mean: 3.3410009404396814 msec\nrounds: 319"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 48.214712512892106,
            "unit": "iter/sec",
            "range": "stddev: 0.0025873206259907026",
            "extra": "mean: 20.74055714285573 msec\nrounds: 49"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 27.989677780035358,
            "unit": "iter/sec",
            "range": "stddev: 0.002433853398339814",
            "extra": "mean: 35.72745666666037 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 37.246058800186105,
            "unit": "iter/sec",
            "range": "stddev: 0.004234677219283041",
            "extra": "mean: 26.848478260873158 msec\nrounds: 46"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 273.3032787605059,
            "unit": "iter/sec",
            "range": "stddev: 0.001643455099691076",
            "extra": "mean: 3.658938906753088 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 3613.5156778427718,
            "unit": "iter/sec",
            "range": "stddev: 0.000013576131545157576",
            "extra": "mean: 276.73880208456404 usec\nrounds: 768"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 4375.783869876016,
            "unit": "iter/sec",
            "range": "stddev: 0.00018120676484561016",
            "extra": "mean: 228.53048270602406 usec\nrounds: 2631"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1865433.7677191566,
            "unit": "iter/sec",
            "range": "stddev: 4.3546203879435786e-7",
            "extra": "mean: 536.068348983887 nsec\nrounds: 101011"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 668152.2358944105,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013112229430548093",
            "extra": "mean: 1.4966649010182047 usec\nrounds: 1889"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 582520.1152131784,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010083564630884352",
            "extra": "mean: 1.7166789161161258 usec\nrounds: 20409"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1478896.3458325204,
            "unit": "iter/sec",
            "range": "stddev: 3.071131858055824e-7",
            "extra": "mean: 676.1799113358863 nsec\nrounds: 4958"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 2157454.476671472,
            "unit": "iter/sec",
            "range": "stddev: 3.999011929883194e-7",
            "extra": "mean: 463.5092006867294 nsec\nrounds: 153847"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 34931.33116326573,
            "unit": "iter/sec",
            "range": "stddev: 0.000005572629340465586",
            "extra": "mean: 28.627594961271157 usec\nrounds: 20877"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 6760.083586938042,
            "unit": "iter/sec",
            "range": "stddev: 0.000013300992245228756",
            "extra": "mean: 147.92716497355426 usec\nrounds: 4134"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 2128302.1670433804,
            "unit": "iter/sec",
            "range": "stddev: 3.120523242367222e-7",
            "extra": "mean: 469.8580941583082 nsec\nrounds: 149254"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 17385.434599313987,
            "unit": "iter/sec",
            "range": "stddev: 0.000012451508746072647",
            "extra": "mean: 57.51941340824803 usec\nrounds: 2864"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 2433.069551305094,
            "unit": "iter/sec",
            "range": "stddev: 0.0000766231804119809",
            "extra": "mean: 411.0034583530922 usec\nrounds: 2053"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2825112.720773984,
            "unit": "iter/sec",
            "range": "stddev: 1.3998854969688498e-7",
            "extra": "mean: 353.9681771444624 nsec\nrounds: 181819"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 224683.25286298204,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011275829847369802",
            "extra": "mean: 4.450709998443129 usec\nrounds: 13662"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 57656.506073327655,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034878237548734",
            "extra": "mean: 17.344096410007886 usec\nrounds: 9833"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 18665.63696666064,
            "unit": "iter/sec",
            "range": "stddev: 0.000005997212318421591",
            "extra": "mean: 53.574383868396005 usec\nrounds: 1339"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 3532.2676628158483,
            "unit": "iter/sec",
            "range": "stddev: 0.00001962219724281067",
            "extra": "mean: 283.1042535442575 usec\nrounds: 1199"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "distinct": true,
          "id": "29fc3ac96c538f8526802e9a1a3f03838fb12ed4",
          "message": "bump: version 0.8.2 → 0.8.3",
          "timestamp": "2026-09-25T14:04:28Z",
          "tree_id": "6e6336c577b3cf368435bce522716cbd22e65a60",
          "url": "https://github.com/loonghao/transx/commit/29fc3ac96c538f8526802e9a1a3f03838fb12ed4"
        },
        "date": 1790345125382,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 270.7003210088471,
            "unit": "iter/sec",
            "range": "stddev: 0.002392363664173297",
            "extra": "mean: 3.6941219584564795 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 48.44714779529547,
            "unit": "iter/sec",
            "range": "stddev: 0.0022045177177957005",
            "extra": "mean: 20.641049999998273 msec\nrounds: 48"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 27.60539468566947,
            "unit": "iter/sec",
            "range": "stddev: 0.0021918393029590677",
            "extra": "mean: 36.22480357142369 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 36.69955966644868,
            "unit": "iter/sec",
            "range": "stddev: 0.0035010023207941022",
            "extra": "mean: 27.248283333334268 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 260.7367676090884,
            "unit": "iter/sec",
            "range": "stddev: 0.0018014825536672835",
            "extra": "mean: 3.835285714285058 msec\nrounds: 315"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 3598.361058993822,
            "unit": "iter/sec",
            "range": "stddev: 0.00002198728374486045",
            "extra": "mean: 277.9042968744279 usec\nrounds: 768"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 4472.136977469333,
            "unit": "iter/sec",
            "range": "stddev: 0.00004094367342970433",
            "extra": "mean: 223.60674662650297 usec\nrounds: 2668"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 2143706.042917348,
            "unit": "iter/sec",
            "range": "stddev: 3.915260158900003e-7",
            "extra": "mean: 466.4818683064913 nsec\nrounds: 101011"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 662518.5601021771,
            "unit": "iter/sec",
            "range": "stddev: 8.313256596560731e-7",
            "extra": "mean: 1.5093916762811517 usec\nrounds: 1874"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 583251.3719150283,
            "unit": "iter/sec",
            "range": "stddev: 7.73932932705404e-7",
            "extra": "mean: 1.7145266143423428 usec\nrounds: 25381"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1481599.7441712404,
            "unit": "iter/sec",
            "range": "stddev: 3.074525634177683e-7",
            "extra": "mean: 674.9461208630055 nsec\nrounds: 3712"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 2136782.2156659206,
            "unit": "iter/sec",
            "range": "stddev: 2.7464500149679765e-7",
            "extra": "mean: 467.993412088725 nsec\nrounds: 163935"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 34299.03058049998,
            "unit": "iter/sec",
            "range": "stddev: 0.000006270506112344817",
            "extra": "mean: 29.155342966705586 usec\nrounds: 22422"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 6513.166939550237,
            "unit": "iter/sec",
            "range": "stddev: 0.00002106306157343636",
            "extra": "mean: 153.5351403213157 usec\nrounds: 4169"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 2131651.8609023117,
            "unit": "iter/sec",
            "range": "stddev: 2.555760333392842e-7",
            "extra": "mean: 469.119755594944 nsec\nrounds: 149254"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 17435.204638875206,
            "unit": "iter/sec",
            "range": "stddev: 0.000006369900826555137",
            "extra": "mean: 57.35522012573939 usec\nrounds: 2385"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 2408.6509619408453,
            "unit": "iter/sec",
            "range": "stddev: 0.00008446307564429695",
            "extra": "mean: 415.17015781905525 usec\nrounds: 2091"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2607407.505916147,
            "unit": "iter/sec",
            "range": "stddev: 2.0449335351966182e-7",
            "extra": "mean: 383.52271278310866 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 179910.9569021287,
            "unit": "iter/sec",
            "range": "stddev: 0.000004295378203124686",
            "extra": "mean: 5.558305159501756 usec\nrounds: 13606"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 57315.15543836591,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038171974264452795",
            "extra": "mean: 17.447392270886436 usec\nrounds: 11696"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 18151.730592116914,
            "unit": "iter/sec",
            "range": "stddev: 0.000010177875700695262",
            "extra": "mean: 55.09116582163733 usec\nrounds: 1381"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 3353.4847532914873,
            "unit": "iter/sec",
            "range": "stddev: 0.00006114407627682907",
            "extra": "mean: 298.1972704717048 usec\nrounds: 1209"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e7a3b063f5ecc2be0b164c5ee92350ad721bf225",
          "message": "ci: drive releases with release-please instead of commitizen (#42)\n\nConventional commits now own the version: merging the\n\"chore: release vX.Y.Z\" PR creates the tag and GitHub Release, and the release\nworkflow builds the wheel/sdist, publishes to PyPI and attaches the artifacts.\n\n- add release-please-config.json and .release-please-manifest.json\n- replace the commitizen bump-commit workflow with release-please\n- mark every version-bearing file with x-release-please-version so the bump\n  cannot leave a stale copy behind\n- drop [tool.commitizen] from pyproject.toml\n- vendor scripts/ci/ (releasable-commit gate, dist/version check, version\n  consistency check)\n\nRepo-specific notes:\n- Tracked by Monica PIP-3615, which also asks for this switch.",
          "timestamp": "2026-09-25T23:36:29+08:00",
          "tree_id": "6f3f3182858a402e3150f495ef60ee2f851c2b79",
          "url": "https://github.com/loonghao/transx/commit/e7a3b063f5ecc2be0b164c5ee92350ad721bf225"
        },
        "date": 1790350641935,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 297.15812278965774,
            "unit": "iter/sec",
            "range": "stddev: 0.0017282655212660241",
            "extra": "mean: 3.365211728396354 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 47.41222121119474,
            "unit": "iter/sec",
            "range": "stddev: 0.002364278341648025",
            "extra": "mean: 21.0916083333359 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 26.853249675845145,
            "unit": "iter/sec",
            "range": "stddev: 0.0029960670962992267",
            "extra": "mean: 37.23944074074258 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 36.56512762883533,
            "unit": "iter/sec",
            "range": "stddev: 0.0034108786948056696",
            "extra": "mean: 27.348461904763003 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 268.32777487448453,
            "unit": "iter/sec",
            "range": "stddev: 0.0019436196022460108",
            "extra": "mean: 3.726785273972362 msec\nrounds: 292"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 3567.2390915644182,
            "unit": "iter/sec",
            "range": "stddev: 0.00001752434369416755",
            "extra": "mean: 280.3288409696835 usec\nrounds: 742"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 4276.334574110828,
            "unit": "iter/sec",
            "range": "stddev: 0.00017778127899396377",
            "extra": "mean: 233.84512663112392 usec\nrounds: 2606"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 2170254.346326836,
            "unit": "iter/sec",
            "range": "stddev: 2.68231730032081e-7",
            "extra": "mean: 460.77548545980517 nsec\nrounds: 104167"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 673094.1544620045,
            "unit": "iter/sec",
            "range": "stddev: 6.930374065745096e-7",
            "extra": "mean: 1.4856762510428978 usec\nrounds: 1878"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 587820.5313156756,
            "unit": "iter/sec",
            "range": "stddev: 7.786494869532958e-7",
            "extra": "mean: 1.7011995102685054 usec\nrounds: 24510"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1485956.110936164,
            "unit": "iter/sec",
            "range": "stddev: 4.955043144473197e-7",
            "extra": "mean: 672.9673862103452 nsec\nrounds: 4354"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 2190020.939564101,
            "unit": "iter/sec",
            "range": "stddev: 3.513587155878807e-7",
            "extra": "mean: 456.61663865142714 nsec\nrounds: 153847"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 33710.75716991153,
            "unit": "iter/sec",
            "range": "stddev: 0.000006918871337546473",
            "extra": "mean: 29.664121602482073 usec\nrounds: 21414"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 6756.866918144305,
            "unit": "iter/sec",
            "range": "stddev: 0.000016710202869909295",
            "extra": "mean: 147.99758706430737 usec\nrounds: 4020"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 2032864.6071373078,
            "unit": "iter/sec",
            "range": "stddev: 4.5630419361502183e-7",
            "extra": "mean: 491.9166758519181 nsec\nrounds: 144928"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 16989.95360886173,
            "unit": "iter/sec",
            "range": "stddev: 0.00000880824708306702",
            "extra": "mean: 58.85831256645771 usec\nrounds: 2809"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 2351.9385891681986,
            "unit": "iter/sec",
            "range": "stddev: 0.00007650812217351533",
            "extra": "mean: 425.18116952775813 usec\nrounds: 1864"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2829901.588851863,
            "unit": "iter/sec",
            "range": "stddev: 1.1156817964627575e-7",
            "extra": "mean: 353.3691786101001 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 224455.23622553796,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014369327351730889",
            "extra": "mean: 4.455231327261959 usec\nrounds: 13228"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 57679.84883866674,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024737820810219158",
            "extra": "mean: 17.33707733522408 usec\nrounds: 11948"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 16873.393214435255,
            "unit": "iter/sec",
            "range": "stddev: 0.00001242570676029636",
            "extra": "mean: 59.264902280858124 usec\nrounds: 1228"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 3470.919270658256,
            "unit": "iter/sec",
            "range": "stddev: 0.00001915476886439614",
            "extra": "mean: 288.1081125837741 usec\nrounds: 1208"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6ccce643633ea6cca68411a86f21b5b33fc8e8bd",
          "message": "ci: fail when vx.lock is missing or out of sync with vx.toml (#45)\n\n* ci: fail when vx.lock is missing or out of sync with vx.toml\n\n* ci: move the macOS job off the retired macos-13 runner\n\nmacos-13 jobs queue indefinitely with no runner available. macos-15-intel is\nthe in-service x64 macOS label, so the x86_64-apple-darwin triple is unchanged.",
          "timestamp": "2026-09-28T13:52:45+08:00",
          "tree_id": "b8e4fcd13c4354500922c5c1ed36828ff77003b3",
          "url": "https://github.com/loonghao/transx/commit/6ccce643633ea6cca68411a86f21b5b33fc8e8bd"
        },
        "date": 1790574815852,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 294.0500456991037,
            "unit": "iter/sec",
            "range": "stddev: 0.001836363949059472",
            "extra": "mean: 3.400781651376727 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 47.88891686843233,
            "unit": "iter/sec",
            "range": "stddev: 0.0021394518580962695",
            "extra": "mean: 20.88165833333318 msec\nrounds: 48"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 27.529552975118506,
            "unit": "iter/sec",
            "range": "stddev: 0.0020953735941981375",
            "extra": "mean: 36.32460000000037 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 36.19589250695261,
            "unit": "iter/sec",
            "range": "stddev: 0.0039020928096875703",
            "extra": "mean: 27.62744418604727 msec\nrounds: 43"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 271.86086816068104,
            "unit": "iter/sec",
            "range": "stddev: 0.0018077751833531321",
            "extra": "mean: 3.6783521172637417 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 3583.7491886762714,
            "unit": "iter/sec",
            "range": "stddev: 0.000011668726122887921",
            "extra": "mean: 279.0373844128779 usec\nrounds: 757"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 4360.321571638753,
            "unit": "iter/sec",
            "range": "stddev: 0.000041684434354520825",
            "extra": "mean: 229.34088313678362 usec\nrounds: 2627"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 2152482.42744776,
            "unit": "iter/sec",
            "range": "stddev: 4.359211995496001e-7",
            "extra": "mean: 464.57986706340705 nsec\nrounds: 106383"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 693176.3126535061,
            "unit": "iter/sec",
            "range": "stddev: 8.362577987940919e-7",
            "extra": "mean: 1.4426344088013638 usec\nrounds: 1860"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 581308.3061652934,
            "unit": "iter/sec",
            "range": "stddev: 8.952678395083311e-7",
            "extra": "mean: 1.7202575455986218 usec\nrounds: 19647"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1478650.1795954155,
            "unit": "iter/sec",
            "range": "stddev: 7.438445746852222e-7",
            "extra": "mean: 676.2924820214187 nsec\nrounds: 4855"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 2176642.8389542336,
            "unit": "iter/sec",
            "range": "stddev: 4.3378333856373663e-7",
            "extra": "mean: 459.4230996944126 nsec\nrounds: 135136"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 35437.91232734515,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043663596113259115",
            "extra": "mean: 28.21836655508526 usec\nrounds: 20619"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 6662.513540192999,
            "unit": "iter/sec",
            "range": "stddev: 0.0000239636453213545",
            "extra": "mean: 150.0935035954962 usec\nrounds: 4033"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 2148819.8651696434,
            "unit": "iter/sec",
            "range": "stddev: 3.359787390330151e-7",
            "extra": "mean: 465.3717215710181 nsec\nrounds: 147059"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 17047.507705438056,
            "unit": "iter/sec",
            "range": "stddev: 0.000011400724907647167",
            "extra": "mean: 58.65960099733557 usec\nrounds: 2807"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 2374.933759846419,
            "unit": "iter/sec",
            "range": "stddev: 0.00008401978279531678",
            "extra": "mean: 421.0643753132161 usec\nrounds: 1993"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2898168.738843893,
            "unit": "iter/sec",
            "range": "stddev: 1.250899543792308e-7",
            "extra": "mean: 345.04547185161806 nsec\nrounds: 178572"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 224405.72396640776,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012048503651004472",
            "extra": "mean: 4.456214317196714 usec\nrounds: 13662"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 57945.75811218082,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031494809840420553",
            "extra": "mean: 17.257518627403883 usec\nrounds: 8858"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 18690.90263897292,
            "unit": "iter/sec",
            "range": "stddev: 0.000005088265577700033",
            "extra": "mean: 53.50196399369564 usec\nrounds: 1222"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 3496.1107563347523,
            "unit": "iter/sec",
            "range": "stddev: 0.00003360845505871165",
            "extra": "mean: 286.0321281835987 usec\nrounds: 1217"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hal.long@outlook.com",
            "name": "loonghao",
            "username": "loonghao"
          },
          "committer": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "distinct": true,
          "id": "cfb248d716d71eff53f3935987dd44423a0b3fad",
          "message": "chore: drop default [settings] and refresh vx.lock",
          "timestamp": "2026-09-28T15:29:51+08:00",
          "tree_id": "f1e653d82647db35b780f510a40b700d4ca7a784",
          "url": "https://github.com/loonghao/transx/commit/cfb248d716d71eff53f3935987dd44423a0b3fad"
        },
        "date": 1790580649357,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 310.784164535431,
            "unit": "iter/sec",
            "range": "stddev: 0.0013836723604567786",
            "extra": "mean: 3.2176671597628803 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 48.752013134809694,
            "unit": "iter/sec",
            "range": "stddev: 0.002356476145014432",
            "extra": "mean: 20.511973469378322 msec\nrounds: 49"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 23.545793523681976,
            "unit": "iter/sec",
            "range": "stddev: 0.007518335991517792",
            "extra": "mean: 42.470431034495235 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 27.835327497191788,
            "unit": "iter/sec",
            "range": "stddev: 0.01744905210679517",
            "extra": "mean: 35.92556976744343 msec\nrounds: 43"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 270.83551902325456,
            "unit": "iter/sec",
            "range": "stddev: 0.0020073983656168177",
            "extra": "mean: 3.692277894740009 msec\nrounds: 285"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 3639.314876403882,
            "unit": "iter/sec",
            "range": "stddev: 0.00001264556577989527",
            "extra": "mean: 274.77699346205804 usec\nrounds: 765"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 4407.797611600641,
            "unit": "iter/sec",
            "range": "stddev: 0.00018780268488638018",
            "extra": "mean: 226.87067059706976 usec\nrounds: 2714"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 2177328.06123714,
            "unit": "iter/sec",
            "range": "stddev: 3.900584935480511e-7",
            "extra": "mean: 459.2785156279151 nsec\nrounds: 103093"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 703272.0580604135,
            "unit": "iter/sec",
            "range": "stddev: 7.704166513124616e-7",
            "extra": "mean: 1.4219248277230667 usec\nrounds: 1756"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 591316.2675995716,
            "unit": "iter/sec",
            "range": "stddev: 7.259482190768597e-7",
            "extra": "mean: 1.6911423797952763 usec\nrounds: 20965"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1472635.3349971462,
            "unit": "iter/sec",
            "range": "stddev: 3.3258642889937895e-7",
            "extra": "mean: 679.0547369297898 nsec\nrounds: 4951"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 2171811.450047473,
            "unit": "iter/sec",
            "range": "stddev: 3.861383498135886e-7",
            "extra": "mean: 460.4451274893782 nsec\nrounds: 147059"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 35293.06487650439,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036372212034120722",
            "extra": "mean: 28.334178499349566 usec\nrounds: 21692"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 6990.327268005247,
            "unit": "iter/sec",
            "range": "stddev: 0.00001695309150419832",
            "extra": "mean: 143.05481870312477 usec\nrounds: 4192"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 2123007.273187457,
            "unit": "iter/sec",
            "range": "stddev: 3.547972865388105e-7",
            "extra": "mean: 471.0299454125808 nsec\nrounds: 156251"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 17833.331560599392,
            "unit": "iter/sec",
            "range": "stddev: 0.000006877470355217804",
            "extra": "mean: 56.074771929288865 usec\nrounds: 2850"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 2464.1851271163137,
            "unit": "iter/sec",
            "range": "stddev: 0.00007175066346625563",
            "extra": "mean: 405.8136659441003 usec\nrounds: 1844"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2893004.081303435,
            "unit": "iter/sec",
            "range": "stddev: 1.0378898958864286e-7",
            "extra": "mean: 345.66145497777967 nsec\nrounds: 175439"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 226946.8866836012,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015531099325648865",
            "extra": "mean: 4.406317330953977 usec\nrounds: 9561"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 57791.381767367835,
            "unit": "iter/sec",
            "range": "stddev: 0.00000284769990258583",
            "extra": "mean: 17.30361810737418 usec\nrounds: 12548"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 18895.69827602305,
            "unit": "iter/sec",
            "range": "stddev: 0.000006950336195307402",
            "extra": "mean: 52.922098214751365 usec\nrounds: 1344"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 3460.625687093886,
            "unit": "iter/sec",
            "range": "stddev: 0.00004302931637050106",
            "extra": "mean: 288.9650862066407 usec\nrounds: 1160"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2359450dc4aa81db635563083c5f486bfe70f7cb",
          "message": "ci(workflows): report benchmark alerts instead of blocking merges (#47)\n\nThe pytest-benchmark gate compared absolute iter/sec against the previous run and failed the job past a 200% threshold. Hosted Windows runners drift up to ~2.5x run to run, so unrelated benchmarks tripped the alert at random on PR #46.",
          "timestamp": "2026-09-28T17:02:25+08:00",
          "tree_id": "56e28414292091ca31e527e9a326fe4698eb9da0",
          "url": "https://github.com/loonghao/transx/commit/2359450dc4aa81db635563083c5f486bfe70f7cb"
        },
        "date": 1790586414320,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 269.4110208794827,
            "unit": "iter/sec",
            "range": "stddev: 0.002584443334005828",
            "extra": "mean: 3.711800641026249 msec\nrounds: 312"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 46.91947774982972,
            "unit": "iter/sec",
            "range": "stddev: 0.0024881397316615073",
            "extra": "mean: 21.313110204079997 msec\nrounds: 49"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 26.855478584769568,
            "unit": "iter/sec",
            "range": "stddev: 0.0032993138473494557",
            "extra": "mean: 37.236350000000584 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 35.2214689105474,
            "unit": "iter/sec",
            "range": "stddev: 0.004308926382028805",
            "extra": "mean: 28.391774418600146 msec\nrounds: 43"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 239.05922739484606,
            "unit": "iter/sec",
            "range": "stddev: 0.0028009269399035066",
            "extra": "mean: 4.183063799283237 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 3578.6075778322734,
            "unit": "iter/sec",
            "range": "stddev: 0.00001585324320409306",
            "extra": "mean: 279.43829499342473 usec\nrounds: 739"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 4415.634368087242,
            "unit": "iter/sec",
            "range": "stddev: 0.00004291158587554902",
            "extra": "mean: 226.4680262539895 usec\nrounds: 2133"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 2212716.835010601,
            "unit": "iter/sec",
            "range": "stddev: 3.5312201116271764e-7",
            "extra": "mean: 451.93310964039773 nsec\nrounds: 106383"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 692613.7776796172,
            "unit": "iter/sec",
            "range": "stddev: 8.216215134948454e-7",
            "extra": "mean: 1.443806104103477 usec\nrounds: 1671"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 604758.6077581363,
            "unit": "iter/sec",
            "range": "stddev: 8.339068776758354e-7",
            "extra": "mean: 1.6535523218214934 usec\nrounds: 18692"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1466122.2403618114,
            "unit": "iter/sec",
            "range": "stddev: 4.0214947011304e-7",
            "extra": "mean: 682.071366541182 nsec\nrounds: 4596"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1998049.2662297902,
            "unit": "iter/sec",
            "range": "stddev: 4.6808892747514517e-7",
            "extra": "mean: 500.4881595772387 nsec\nrounds: 138889"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 34407.1453067845,
            "unit": "iter/sec",
            "range": "stddev: 0.0000055370763284638475",
            "extra": "mean: 29.06373054444645 usec\nrounds: 20367"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 6894.526249638148,
            "unit": "iter/sec",
            "range": "stddev: 0.000021511045404369674",
            "extra": "mean: 145.04259811215948 usec\nrounds: 4026"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 2159645.786486892,
            "unit": "iter/sec",
            "range": "stddev: 3.3733864701450967e-7",
            "extra": "mean: 463.03889566386056 nsec\nrounds: 117648"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 17786.398872231348,
            "unit": "iter/sec",
            "range": "stddev: 0.000006931962158206718",
            "extra": "mean: 56.22273553986409 usec\nrounds: 2749"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 2276.29461607875,
            "unit": "iter/sec",
            "range": "stddev: 0.0003797263024253972",
            "extra": "mean: 439.31044467462044 usec\nrounds: 1934"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2891285.9326742915,
            "unit": "iter/sec",
            "range": "stddev: 1.934843065238531e-7",
            "extra": "mean: 345.8668645321603 nsec\nrounds: 188680"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 224841.91337587556,
            "unit": "iter/sec",
            "range": "stddev: 0.000001140308832674091",
            "extra": "mean: 4.447569338765888 usec\nrounds: 13124"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 58072.40372192475,
            "unit": "iter/sec",
            "range": "stddev: 0.00000412677991465776",
            "extra": "mean: 17.219883040978008 usec\nrounds: 11628"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 18632.77730753748,
            "unit": "iter/sec",
            "range": "stddev: 0.000005739223404616454",
            "extra": "mean: 53.66886446903823 usec\nrounds: 1365"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 3507.0149735351424,
            "unit": "iter/sec",
            "range": "stddev: 0.000014555920441193293",
            "extra": "mean: 285.1427802693354 usec\nrounds: 1115"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hal.long@outlook.com",
            "name": "loonghao",
            "username": "loonghao"
          },
          "committer": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "distinct": true,
          "id": "ad688591327cc09325ea49845055825325d14d32",
          "message": "style(compat): satisfy isort import-heading check",
          "timestamp": "2026-09-29T01:35:14+08:00",
          "tree_id": "5051480ac79dd538b5669de899f199cb4eb56029",
          "url": "https://github.com/loonghao/transx/commit/ad688591327cc09325ea49845055825325d14d32"
        },
        "date": 1790616966003,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 310.97454145842124,
            "unit": "iter/sec",
            "range": "stddev: 0.0011112725695277908",
            "extra": "mean: 3.2156973214275317 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 48.057303135949084,
            "unit": "iter/sec",
            "range": "stddev: 0.0025540300144093107",
            "extra": "mean: 20.80849183673717 msec\nrounds: 49"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 28.061069305124814,
            "unit": "iter/sec",
            "range": "stddev: 0.0020226689222791",
            "extra": "mean: 35.63656071429072 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 38.17611166292245,
            "unit": "iter/sec",
            "range": "stddev: 0.0024039104955956574",
            "extra": "mean: 26.194391111110033 msec\nrounds: 45"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 289.38406611122844,
            "unit": "iter/sec",
            "range": "stddev: 0.0010211142197298244",
            "extra": "mean: 3.4556152777797973 msec\nrounds: 288"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 3244.3489282370465,
            "unit": "iter/sec",
            "range": "stddev: 0.000039084185498186094",
            "extra": "mean: 308.2282522994196 usec\nrounds: 761"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 4481.410045077961,
            "unit": "iter/sec",
            "range": "stddev: 0.00017066114198426388",
            "extra": "mean: 223.14405286307687 usec\nrounds: 2270"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1985678.4140761027,
            "unit": "iter/sec",
            "range": "stddev: 4.2270538096896787e-7",
            "extra": "mean: 503.6062198748736 nsec\nrounds: 113637"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 649337.781064753,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010578867987452467",
            "extra": "mean: 1.5400305190316324 usec\nrounds: 1966"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 572227.5269406651,
            "unit": "iter/sec",
            "range": "stddev: 8.873866608070264e-7",
            "extra": "mean: 1.7475566150170387 usec\nrounds: 24331"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1323537.3131754796,
            "unit": "iter/sec",
            "range": "stddev: 8.403286193150107e-7",
            "extra": "mean: 755.551044949963 nsec\nrounds: 4927"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 2001011.0255349807,
            "unit": "iter/sec",
            "range": "stddev: 2.928344768817661e-7",
            "extra": "mean: 499.7473713232763 nsec\nrounds: 158731"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 32290.529617609725,
            "unit": "iter/sec",
            "range": "stddev: 0.00000687390526997056",
            "extra": "mean: 30.96883240511011 usec\nrounds: 21009"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 6643.6059370987,
            "unit": "iter/sec",
            "range": "stddev: 0.000019045871001641852",
            "extra": "mean: 150.5206674610062 usec\nrounds: 4195"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1870656.629505732,
            "unit": "iter/sec",
            "range": "stddev: 4.125408743083102e-7",
            "extra": "mean: 534.5716494556361 nsec\nrounds: 144928"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 17032.907121163877,
            "unit": "iter/sec",
            "range": "stddev: 0.000006162251211343229",
            "extra": "mean: 58.70988392565537 usec\nrounds: 2843"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 2431.179908356439,
            "unit": "iter/sec",
            "range": "stddev: 0.00007361091998640282",
            "extra": "mean: 411.322912205224 usec\nrounds: 1868"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2596199.7066679792,
            "unit": "iter/sec",
            "range": "stddev: 1.1624107810447873e-7",
            "extra": "mean: 385.17838108972836 nsec\nrounds: 175439"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 218620.25622496346,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014890581322483022",
            "extra": "mean: 4.5741415606565985 usec\nrounds: 13775"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 57190.75283136849,
            "unit": "iter/sec",
            "range": "stddev: 0.000011326656844864777",
            "extra": "mean: 17.48534422948724 usec\nrounds: 12971"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 17739.08119191975,
            "unit": "iter/sec",
            "range": "stddev: 0.000006962767625097237",
            "extra": "mean: 56.37270550717731 usec\nrounds: 1253"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 3232.782886242007,
            "unit": "iter/sec",
            "range": "stddev: 0.000015901222737937746",
            "extra": "mean: 309.33101145015763 usec\nrounds: 1048"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d679f2fd08c3b30e23ffdbfb033cf26b6b8efcf",
          "message": "feat(translate): persist translations in a translation memory (#50)\n\n* feat(translate): persist translations in a translation memory\n\nAuto-translation re-sent every string on every run, because the caches that\navoid that live in the process and die with it. A project therefore paid the\nfull request count again on each CI run and each local run, which is what kept\npushing it into the backend's rate limit.\n\nAdd a translation memory that survives the process. Strings are looked up\nbefore any request is made, so a repeat run costs no network traffic at all,\nand results are written back so the next run is cheaper still.\n\nThe memory is plain JSON, versioned and sorted, and written through a\ntemporary file and a rename so it can be committed alongside the catalogs and\nreviewed in a diff without churn. A file that is missing, corrupt or from an\nunknown version is set aside and treated as empty: bad cache state must never\nbreak a localisation run.\n\nEntries are keyed by source text, languages and engine, so switching backends\ncannot silently reuse another engine's translations under a new name.\n\nOffline mode (TRANSX_OFFLINE, or --offline) refuses to open a socket. Misses\nfall back to the source text and are reported through the existing failure\ncount rather than raised, so a half populated memory still produces a complete\ncatalog and a non-zero exit status.\n\nThe memory is only enabled when a location is known - an explicit path,\nTRANSX_TM_PATH, or a locale root. A bare GoogleTranslator() stays inert\ninstead of quietly sharing a file in the user's home directory, which would\ncouple unrelated runs together.\n\n* fix(translate): keep offline fallbacks out of the translation memory\n\nAn offline miss substituted the source text for the missing translation\nand then persisted it like any other result. Because the entry was never\nempty it survived every later lookup, so the string was never translated\nagain - not even once the network was back - and failure_count stayed at\nzero, turning a real gap into a green run.\n\nOffline fallbacks are now returned but not remembered, so the gap stays\nvisible to the next run.\n\nAlso spell out the temporary-file cleanup in _atomic_write instead of\nusing contextlib.suppress: that API is Python 3.4+ and raises\nAttributeError on 2.7 inside the very handler save() depends on, where\nonly (IOError, OSError) is caught. The 2.7 static guard now rejects it.",
          "timestamp": "2026-09-29T09:19:04+08:00",
          "tree_id": "7fe5734e7537f58551a9967591e8fc17c0fad4ea",
          "url": "https://github.com/loonghao/transx/commit/6d679f2fd08c3b30e23ffdbfb033cf26b6b8efcf"
        },
        "date": 1790644803340,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 290.86027896033426,
            "unit": "iter/sec",
            "range": "stddev: 0.001974294853642243",
            "extra": "mean: 3.4380768786114446 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 46.77034305302474,
            "unit": "iter/sec",
            "range": "stddev: 0.0025150870684061844",
            "extra": "mean: 21.381070454545828 msec\nrounds: 44"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 27.290113004315955,
            "unit": "iter/sec",
            "range": "stddev: 0.002580716169664328",
            "extra": "mean: 36.64330740740609 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 36.167554692280206,
            "unit": "iter/sec",
            "range": "stddev: 0.003688550999526171",
            "extra": "mean: 27.64909069767565 msec\nrounds: 43"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 271.46551894345623,
            "unit": "iter/sec",
            "range": "stddev: 0.0019039167121534522",
            "extra": "mean: 3.683709090907751 msec\nrounds: 88"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 3615.7093964447886,
            "unit": "iter/sec",
            "range": "stddev: 0.0000205187202447226",
            "extra": "mean: 276.5708994708668 usec\nrounds: 756"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 4414.208205013004,
            "unit": "iter/sec",
            "range": "stddev: 0.00004033355140154499",
            "extra": "mean: 226.5411946052631 usec\nrounds: 2595"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 2155926.737392782,
            "unit": "iter/sec",
            "range": "stddev: 5.529723123306733e-7",
            "extra": "mean: 463.83765396839317 nsec\nrounds: 23530"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 690557.0520033549,
            "unit": "iter/sec",
            "range": "stddev: 6.203542974763387e-7",
            "extra": "mean: 1.4481062746357152 usec\nrounds: 1769"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 584752.4945202887,
            "unit": "iter/sec",
            "range": "stddev: 8.527505321625121e-7",
            "extra": "mean: 1.7101252399450926 usec\nrounds: 19802"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1471463.2560261663,
            "unit": "iter/sec",
            "range": "stddev: 3.6170360404806135e-7",
            "extra": "mean: 679.5956310187452 nsec\nrounds: 4303"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 2164409.520016926,
            "unit": "iter/sec",
            "range": "stddev: 4.5876343494598183e-7",
            "extra": "mean: 462.01977525592287 nsec\nrounds: 131579"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 35912.823943760195,
            "unit": "iter/sec",
            "range": "stddev: 0.000004383740821486749",
            "extra": "mean: 27.845206535860534 usec\nrounds: 20747"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 6794.871397476805,
            "unit": "iter/sec",
            "range": "stddev: 0.00002210397248248803",
            "extra": "mean: 147.16981992791477 usec\nrounds: 4165"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 2170253.5443313997,
            "unit": "iter/sec",
            "range": "stddev: 4.976451961760096e-7",
            "extra": "mean: 460.7756557347657 nsec\nrounds: 131579"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 17074.701820464343,
            "unit": "iter/sec",
            "range": "stddev: 0.000006210128525013329",
            "extra": "mean: 58.566176470588886 usec\nrounds: 2720"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 2389.8371116229578,
            "unit": "iter/sec",
            "range": "stddev: 0.00007502054632123347",
            "extra": "mean: 418.4385601581406 usec\nrounds: 2028"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2873514.8707589363,
            "unit": "iter/sec",
            "range": "stddev: 2.3683902210810776e-7",
            "extra": "mean: 348.00585519012327 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 222508.452742032,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018292611312554187",
            "extra": "mean: 4.4942112880509875 usec\nrounds: 12438"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 57047.29779020869,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037621098063452033",
            "extra": "mean: 17.529314073341347 usec\nrounds: 11561"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 18890.029940339868,
            "unit": "iter/sec",
            "range": "stddev: 0.000009610300040413904",
            "extra": "mean: 52.937978561086815 usec\nrounds: 1306"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 3513.6118761881876,
            "unit": "iter/sec",
            "range": "stddev: 0.00002059080085268994",
            "extra": "mean: 284.60741687976935 usec\nrounds: 1173"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ccf4c0bb2f249e25f9fb313a338693ad8e5e4613",
          "message": "chore(deps): update actions/checkout action to v7 (#35)\n\nBumps actions/checkout from v6 to v7 across the six workflows that use it. No source changes.\n\nVerified on head 454f3643: 16 check-runs terminal (15 success, 1 skipped), 0 failing; all 9 occurrences migrated, no v4/v5/v6 residue and no SHA-pinned variants left behind.",
          "timestamp": "2026-09-29T10:04:35+08:00",
          "tree_id": "bece67c5a149f26e887753c1728f3295381a831c",
          "url": "https://github.com/loonghao/transx/commit/ccf4c0bb2f249e25f9fb313a338693ad8e5e4613"
        },
        "date": 1790647550283,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 470.5837817551421,
            "unit": "iter/sec",
            "range": "stddev: 0.0013049020102946758",
            "extra": "mean: 2.1250201107022595 msec\nrounds: 542"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 91.58980437565292,
            "unit": "iter/sec",
            "range": "stddev: 0.0015013419462451359",
            "extra": "mean: 10.918245833330195 msec\nrounds: 96"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 54.32312129789653,
            "unit": "iter/sec",
            "range": "stddev: 0.002132025068679249",
            "extra": "mean: 18.408367857145233 msec\nrounds: 56"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 67.1747560180422,
            "unit": "iter/sec",
            "range": "stddev: 0.002413499707502987",
            "extra": "mean: 14.886544578314718 msec\nrounds: 83"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 433.43489017795076,
            "unit": "iter/sec",
            "range": "stddev: 0.0012856901177796176",
            "extra": "mean: 2.3071515991466227 msec\nrounds: 469"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 5943.731740504811,
            "unit": "iter/sec",
            "range": "stddev: 0.000011408747521537037",
            "extra": "mean: 168.24447058828204 usec\nrounds: 1275"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 10176.607870977816,
            "unit": "iter/sec",
            "range": "stddev: 0.00011820956874043947",
            "extra": "mean: 98.26457034390137 usec\nrounds: 3689"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 3759646.7297827797,
            "unit": "iter/sec",
            "range": "stddev: 2.63269070331757e-7",
            "extra": "mean: 265.98243714716693 nsec\nrounds: 153847"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 1170204.6717984788,
            "unit": "iter/sec",
            "range": "stddev: 8.49777834826798e-7",
            "extra": "mean: 854.5513653292013 nsec\nrounds: 3076"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 987255.129830187,
            "unit": "iter/sec",
            "range": "stddev: 5.160954566046328e-7",
            "extra": "mean: 1.0129093987812503 usec\nrounds: 27174"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 2587916.5546538676,
            "unit": "iter/sec",
            "range": "stddev: 4.6903668445355317e-7",
            "extra": "mean: 386.41122265000905 nsec\nrounds: 9552"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 5013000.264383434,
            "unit": "iter/sec",
            "range": "stddev: 5.8063589635918536e-8",
            "extra": "mean: 199.48133797335703 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 56588.53779692016,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024416283623268935",
            "extra": "mean: 17.671423205680092 usec\nrounds: 31949"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 10916.675821911496,
            "unit": "iter/sec",
            "range": "stddev: 0.000007074946624652037",
            "extra": "mean: 91.60297661242643 usec\nrounds: 5644"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 3744611.7676264374,
            "unit": "iter/sec",
            "range": "stddev: 3.0123583342345177e-7",
            "extra": "mean: 267.050381202498 nsec\nrounds: 153847"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 28548.705419249345,
            "unit": "iter/sec",
            "range": "stddev: 0.0000050062128335126894",
            "extra": "mean: 35.027858017188294 usec\nrounds: 4085"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 5431.723204035736,
            "unit": "iter/sec",
            "range": "stddev: 0.000085441962144614",
            "extra": "mean: 184.1036375448967 usec\nrounds: 3079"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 4928192.986676497,
            "unit": "iter/sec",
            "range": "stddev: 5.393371689045327e-8",
            "extra": "mean: 202.91413154954097 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 345928.29678664496,
            "unit": "iter/sec",
            "range": "stddev: 8.553896980979696e-7",
            "extra": "mean: 2.8907724788318228 usec\nrounds: 16104"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 87252.78207017116,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026790156335490653",
            "extra": "mean: 11.46095260545127 usec\nrounds: 12723"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 31566.160252317244,
            "unit": "iter/sec",
            "range": "stddev: 0.000003040280059950196",
            "extra": "mean: 31.67949449685097 usec\nrounds: 2453"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 5650.893820670202,
            "unit": "iter/sec",
            "range": "stddev: 0.00001913676475466967",
            "extra": "mean: 176.9631551635488 usec\nrounds: 1927"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "distinct": true,
          "id": "e0ced77d030575f1235ccf4fee8f6459e85b67a7",
          "message": "chore(deps): update loonghao/vx action to v0.9.34",
          "timestamp": "2026-10-02T00:32:17+08:00",
          "tree_id": "3df08d39b6b49fad0f70720f31c8ee7d5e9c147f",
          "url": "https://github.com/loonghao/transx/commit/e0ced77d030575f1235ccf4fee8f6459e85b67a7"
        },
        "date": 1790872383777,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 543.5079607582724,
            "unit": "iter/sec",
            "range": "stddev: 0.000757957454858767",
            "extra": "mean: 1.8398994535514348 msec\nrounds: 549"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 107.97668783309983,
            "unit": "iter/sec",
            "range": "stddev: 0.001121495055061421",
            "extra": "mean: 9.261258333333076 msec\nrounds: 108"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 64.28751680350267,
            "unit": "iter/sec",
            "range": "stddev: 0.0013417336378444313",
            "extra": "mean: 15.555119402986733 msec\nrounds: 67"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 80.46830179949855,
            "unit": "iter/sec",
            "range": "stddev: 0.001355046431709827",
            "extra": "mean: 12.427253684210738 msec\nrounds: 95"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 513.9800005580964,
            "unit": "iter/sec",
            "range": "stddev: 0.0006860539523372356",
            "extra": "mean: 1.9456009940351124 msec\nrounds: 503"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 6966.687147108235,
            "unit": "iter/sec",
            "range": "stddev: 0.000005771126853696188",
            "extra": "mean: 143.5402478802403 usec\nrounds: 1533"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 11709.108335228218,
            "unit": "iter/sec",
            "range": "stddev: 0.00007351281953255534",
            "extra": "mean: 85.40359960556377 usec\nrounds: 4056"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 4241297.953022638,
            "unit": "iter/sec",
            "range": "stddev: 1.2921204182093056e-7",
            "extra": "mean: 235.7768803503493 nsec\nrounds: 158731"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 1168859.4107050444,
            "unit": "iter/sec",
            "range": "stddev: 2.906118419622756e-7",
            "extra": "mean: 855.5348837006925 nsec\nrounds: 3225"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 1028259.3526337569,
            "unit": "iter/sec",
            "range": "stddev: 2.1921578286443333e-7",
            "extra": "mean: 972.5172909330955 nsec\nrounds: 38315"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 2938466.8260666374,
            "unit": "iter/sec",
            "range": "stddev: 4.6200532982566854e-7",
            "extra": "mean: 340.3135237495863 nsec\nrounds: 8548"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 5959119.285027866,
            "unit": "iter/sec",
            "range": "stddev: 2.4916146307955285e-8",
            "extra": "mean: 167.81003235032972 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 66251.9454003634,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013042099932034445",
            "extra": "mean: 15.093896397410768 usec\nrounds: 20791"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 11092.797765217725,
            "unit": "iter/sec",
            "range": "stddev: 0.000004091947853157553",
            "extra": "mean: 90.14858299639906 usec\nrounds: 5187"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 4135752.288413232,
            "unit": "iter/sec",
            "range": "stddev: 1.8600195884942622e-7",
            "extra": "mean: 241.79397852274923 nsec\nrounds: 158731"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 29629.29383965102,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032506173469264633",
            "extra": "mean: 33.750382490107235 usec\nrounds: 4706"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 6033.715208656658,
            "unit": "iter/sec",
            "range": "stddev: 0.00003078997798231965",
            "extra": "mean: 165.7353662574736 usec\nrounds: 3017"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 5549248.967271659,
            "unit": "iter/sec",
            "range": "stddev: 8.091710212237231e-8",
            "extra": "mean: 180.2045656804725 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 418385.29217057436,
            "unit": "iter/sec",
            "range": "stddev: 5.426962414798224e-7",
            "extra": "mean: 2.390141380955388 usec\nrounds: 15773"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 86404.67418782286,
            "unit": "iter/sec",
            "range": "stddev: 0.0000054492654827637124",
            "extra": "mean: 11.573447957528801 usec\nrounds: 17332"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 34192.51602848843,
            "unit": "iter/sec",
            "range": "stddev: 0.000004665814522070529",
            "extra": "mean: 29.246166007989075 usec\nrounds: 2530"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 6464.852387266348,
            "unit": "iter/sec",
            "range": "stddev: 0.00003341596423454741",
            "extra": "mean: 154.68257279465095 usec\nrounds: 2301"
          }
        ]
      }
    ]
  }
}