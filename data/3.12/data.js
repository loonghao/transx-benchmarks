window.BENCHMARK_DATA = {
  "lastUpdate": 1734018630888,
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
      }
    ]
  }
}