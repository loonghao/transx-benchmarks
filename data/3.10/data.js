window.BENCHMARK_DATA = {
  "lastUpdate": 1734018624195,
  "repoUrl": "https://github.com/loonghao/transx",
  "entries": {
    "TransX Performance Benchmarks (Python 3.10)": [
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
        "date": 1734017731960,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2981.734513813977,
            "unit": "iter/sec",
            "range": "stddev: 0.0002116360892390977",
            "extra": "mean: 335.37526408442255 usec\nrounds: 1136"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 73184.50220807179,
            "unit": "iter/sec",
            "range": "stddev: 9.75613111162665e-7",
            "extra": "mean: 13.664095127092443 usec\nrounds: 1724"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 68332.04933475985,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017935656559305488",
            "extra": "mean: 14.634421325503984 usec\nrounds: 29412"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 68017.50583809537,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038653194652406885",
            "extra": "mean: 14.702097462678765 usec\nrounds: 31848"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 988951.7652542533,
            "unit": "iter/sec",
            "range": "stddev: 4.909408767405824e-7",
            "extra": "mean: 1.0111716618887943 usec\nrounds: 3303"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 74034.42976070386,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019894036357948084",
            "extra": "mean: 13.507229045083859 usec\nrounds: 28012"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 762.0419459729139,
            "unit": "iter/sec",
            "range": "stddev: 0.00013500800039068455",
            "extra": "mean: 1.3122637215504986 msec\nrounds: 747"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 2281.129220612007,
            "unit": "iter/sec",
            "range": "stddev: 0.000033832804336505424",
            "extra": "mean: 438.37937411178694 usec\nrounds: 2109"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 61829.26733710745,
            "unit": "iter/sec",
            "range": "stddev: 0.000004314302436028739",
            "extra": "mean: 16.173570269687477 usec\nrounds: 19724"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 17911.311301436923,
            "unit": "iter/sec",
            "range": "stddev: 0.0000062518324005113095",
            "extra": "mean: 55.83064149634738 usec\nrounds: 11442"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1648.8076993588547,
            "unit": "iter/sec",
            "range": "stddev: 0.00006471534910731712",
            "extra": "mean: 606.4988660526354 usec\nrounds: 1411"
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
        "date": 1734018613270,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2852.0264891521915,
            "unit": "iter/sec",
            "range": "stddev: 0.00021306011604006723",
            "extra": "mean: 350.6278794406518 usec\nrounds: 929"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 71649.63936472769,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014596328777190025",
            "extra": "mean: 13.956804372867351 usec\nrounds: 1646"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 66234.14046642544,
            "unit": "iter/sec",
            "range": "stddev: 0.00000873467728550747",
            "extra": "mean: 15.097953909538651 usec\nrounds: 28249"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 67375.41171122702,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027303722518808566",
            "extra": "mean: 14.842209859674465 usec\nrounds: 27323"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 982425.4658396746,
            "unit": "iter/sec",
            "range": "stddev: 7.652294708059108e-7",
            "extra": "mean: 1.0178889236602846 usec\nrounds: 3259"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 71190.080689892,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024445868470111377",
            "extra": "mean: 14.04690078040586 usec\nrounds: 31153"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 743.0155193200043,
            "unit": "iter/sec",
            "range": "stddev: 0.0001512542584680256",
            "extra": "mean: 1.345866908560919 msec\nrounds: 689"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 630.2981054372095,
            "unit": "iter/sec",
            "range": "stddev: 0.0002844215932729762",
            "extra": "mean: 1.5865508580362062 msec\nrounds: 641"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 49000.16987881441,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036335561927658645",
            "extra": "mean: 20.408092512192646 usec\nrounds: 21835"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 874.475466773429,
            "unit": "iter/sec",
            "range": "stddev: 0.00009503330850435684",
            "extra": "mean: 1.1435426584232506 msec\nrounds: 647"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1628.5086043738852,
            "unit": "iter/sec",
            "range": "stddev: 0.00008386276201419494",
            "extra": "mean: 614.058775811302 usec\nrounds: 1356"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 73649.0504868834,
            "unit": "iter/sec",
            "range": "stddev: 0.00000259602012216981",
            "extra": "mean: 13.577907568246193 usec\nrounds: 47170"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 60056.22644304311,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025777115076603836",
            "extra": "mean: 16.6510628327338 usec\nrounds: 23475"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 35038.13813759256,
            "unit": "iter/sec",
            "range": "stddev: 0.000003893167009846232",
            "extra": "mean: 28.54032928556486 usec\nrounds: 18282"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 701.1938994800877,
            "unit": "iter/sec",
            "range": "stddev: 0.0001354109407092929",
            "extra": "mean: 1.4261390476178804 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 72.93189672516687,
            "unit": "iter/sec",
            "range": "stddev: 0.000979871095018316",
            "extra": "mean: 13.711421818197778 msec\nrounds: 55"
          }
        ]
      }
    ]
  }
}