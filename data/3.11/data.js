window.BENCHMARK_DATA = {
  "lastUpdate": 1734018626526,
  "repoUrl": "https://github.com/loonghao/transx",
  "entries": {
    "TransX Performance Benchmarks (Python 3.11)": [
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
        "date": 1734017747466,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3185.8657064340023,
            "unit": "iter/sec",
            "range": "stddev: 0.00026697867951148665",
            "extra": "mean: 313.8864259031553 usec\nrounds: 803"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 94247.2903952182,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024883543773778616",
            "extra": "mean: 10.610384614842324 usec\nrounds: 2080"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 87995.60740534202,
            "unit": "iter/sec",
            "range": "stddev: 0.00000189244134965235",
            "extra": "mean: 11.364203617501165 usec\nrounds: 33671"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 88230.6727725874,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019875197274630785",
            "extra": "mean: 11.333926950522955 usec\nrounds: 37454"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1235986.5469665886,
            "unit": "iter/sec",
            "range": "stddev: 7.431054907530836e-7",
            "extra": "mean: 809.070294862224 nsec\nrounds: 3528"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 95156.36746953768,
            "unit": "iter/sec",
            "range": "stddev: 0.000003635448553028114",
            "extra": "mean: 10.509018225397572 usec\nrounds: 38023"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 1009.1264593041715,
            "unit": "iter/sec",
            "range": "stddev: 0.00004631138517121122",
            "extra": "mean: 990.9560796667006 usec\nrounds: 954"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 2851.581568514515,
            "unit": "iter/sec",
            "range": "stddev: 0.000032639864619137974",
            "extra": "mean: 350.6825864781185 usec\nrounds: 2544"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 76429.77728018849,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022140123034513764",
            "extra": "mean: 13.083905718239114 usec\nrounds: 37038"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 23060.954512548455,
            "unit": "iter/sec",
            "range": "stddev: 0.000005648306226406319",
            "extra": "mean: 43.36333951206821 usec\nrounds: 14026"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1762.7871538059596,
            "unit": "iter/sec",
            "range": "stddev: 0.00006690993916012081",
            "extra": "mean: 567.2834623516186 usec\nrounds: 1421"
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
        "date": 1734018612620,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3237.269223449332,
            "unit": "iter/sec",
            "range": "stddev: 0.00024408022357937068",
            "extra": "mean: 308.90232815869837 usec\nrounds: 902"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 93992.48638594145,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024333732622386486",
            "extra": "mean: 10.639148281426579 usec\nrounds: 1949"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 87510.9232880335,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026137394155533014",
            "extra": "mean: 11.42714489148514 usec\nrounds: 22472"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 86337.96750767632,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033683374761257374",
            "extra": "mean: 11.582389867019858 usec\nrounds: 35843"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1322519.8042941499,
            "unit": "iter/sec",
            "range": "stddev: 8.138100896772917e-8",
            "extra": "mean: 756.1323442968902 nsec\nrounds: 3506"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 92997.54523612537,
            "unit": "iter/sec",
            "range": "stddev: 0.000002430950338447476",
            "extra": "mean: 10.752972000077534 usec\nrounds: 25000"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 979.6394543901188,
            "unit": "iter/sec",
            "range": "stddev: 0.00006745316729543439",
            "extra": "mean: 1.020783713353559 msec\nrounds: 921"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 857.7797899593123,
            "unit": "iter/sec",
            "range": "stddev: 0.0000546404704479106",
            "extra": "mean: 1.1658003740650427 msec\nrounds: 802"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 58743.88100319399,
            "unit": "iter/sec",
            "range": "stddev: 0.000003470728584555352",
            "extra": "mean: 17.023049599763908 usec\nrounds: 31250"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 1114.6258343983832,
            "unit": "iter/sec",
            "range": "stddev: 0.00009385774610891604",
            "extra": "mean: 897.1620512813143 usec\nrounds: 780"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1754.3593423951984,
            "unit": "iter/sec",
            "range": "stddev: 0.00008543442029812486",
            "extra": "mean: 570.0086497870591 usec\nrounds: 1422"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 94742.76288923799,
            "unit": "iter/sec",
            "range": "stddev: 0.000002605600251678158",
            "extra": "mean: 10.554895904493321 usec\nrounds: 33671"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 75501.64561361274,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024021444372107265",
            "extra": "mean: 13.244744427394343 usec\nrounds: 24631"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 41051.81971937909,
            "unit": "iter/sec",
            "range": "stddev: 0.000005461345726269948",
            "extra": "mean: 24.35945609319569 usec\nrounds: 19268"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 938.2268362222809,
            "unit": "iter/sec",
            "range": "stddev: 0.00004806933801486037",
            "extra": "mean: 1.0658403292176606 msec\nrounds: 486"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 98.01136972726738,
            "unit": "iter/sec",
            "range": "stddev: 0.0002289174045354638",
            "extra": "mean: 10.202897916666842 msec\nrounds: 96"
          }
        ]
      }
    ]
  }
}