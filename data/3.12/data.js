window.BENCHMARK_DATA = {
  "lastUpdate": 1734020619232,
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
      }
    ]
  }
}