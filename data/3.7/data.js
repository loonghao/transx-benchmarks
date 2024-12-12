window.BENCHMARK_DATA = {
  "lastUpdate": 1734018620829,
  "repoUrl": "https://github.com/loonghao/transx",
  "entries": {
    "TransX Performance Benchmarks (Python 3.7)": [
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
        "date": 1734017769023,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2813.86183504751,
            "unit": "iter/sec",
            "range": "stddev: 0.00016283322391281895",
            "extra": "mean: 355.383476027392 usec\nrounds: 1168"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 63244.22775369646,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017577066235028565",
            "extra": "mean: 15.81171967020425 usec\nrounds: 1698"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 57650.58508741278,
            "unit": "iter/sec",
            "range": "stddev: 0.000011037195555420493",
            "extra": "mean: 17.34587773018693 usec\nrounds: 28249"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 59430.115494157784,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021334595823500822",
            "extra": "mean: 16.826485893306128 usec\nrounds: 28249"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 850288.6609502076,
            "unit": "iter/sec",
            "range": "stddev: 2.1132053727915165e-7",
            "extra": "mean: 1.176071193143383 usec\nrounds: 3034"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 62299.98024343407,
            "unit": "iter/sec",
            "range": "stddev: 0.000005324761956898205",
            "extra": "mean: 16.051369456178794 usec\nrounds: 30304"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 626.4380224500592,
            "unit": "iter/sec",
            "range": "stddev: 0.0000665149489440178",
            "extra": "mean: 1.5963271132376418 msec\nrounds: 627"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 1913.0008855714661,
            "unit": "iter/sec",
            "range": "stddev: 0.0000539112012407971",
            "extra": "mean: 522.7389111747706 usec\nrounds: 1745"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 51329.961628416924,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033371809999866716",
            "extra": "mean: 19.481799095021866 usec\nrounds: 27625"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 15128.262813839165,
            "unit": "iter/sec",
            "range": "stddev: 0.000011364211811090175",
            "extra": "mean: 66.1014428626406 usec\nrounds: 10396"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1511.5226868029013,
            "unit": "iter/sec",
            "range": "stddev: 0.0000646474009954505",
            "extra": "mean: 661.5845125786044 usec\nrounds: 1272"
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
        "date": 1734018610791,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2744.2012724452334,
            "unit": "iter/sec",
            "range": "stddev: 0.00021962919771325107",
            "extra": "mean: 364.4047577854759 usec\nrounds: 1156"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 62645.109150100296,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041698587992801975",
            "extra": "mean: 15.962938105893603 usec\nrounds: 1341"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 58472.48060716129,
            "unit": "iter/sec",
            "range": "stddev: 0.00000261367129520502",
            "extra": "mean: 17.102062194322695 usec\nrounds: 27398"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 59426.857409640375,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021186874747669475",
            "extra": "mean: 16.82740840739422 usec\nrounds: 26667"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 888493.8688188749,
            "unit": "iter/sec",
            "range": "stddev: 1.1299906228177291e-7",
            "extra": "mean: 1.1255001695502487 usec\nrounds: 2949"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 62445.26551726876,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029592595557681756",
            "extra": "mean: 16.014024309392322 usec\nrounds: 22625"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 656.1675815661789,
            "unit": "iter/sec",
            "range": "stddev: 0.00015771466560358856",
            "extra": "mean: 1.5240009230769096 msec\nrounds: 650"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 578.2888808057216,
            "unit": "iter/sec",
            "range": "stddev: 0.00014566776652618382",
            "extra": "mean: 1.7292395430579857 msec\nrounds: 569"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 42900.42518521645,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026841475484950005",
            "extra": "mean: 23.309792284869975 usec\nrounds: 24938"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 769.3482200241231,
            "unit": "iter/sec",
            "range": "stddev: 0.00010832063190165183",
            "extra": "mean: 1.299801538461537 msec\nrounds: 585"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1512.3723921116875,
            "unit": "iter/sec",
            "range": "stddev: 0.00006093762410504108",
            "extra": "mean: 661.2128105589953 usec\nrounds: 1288"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 63771.83493919952,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021222843215008398",
            "extra": "mean: 15.680903661520896 usec\nrounds: 39683"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 53046.65228516016,
            "unit": "iter/sec",
            "range": "stddev: 0.00000220713260270764",
            "extra": "mean: 18.851330987379775 usec\nrounds: 24155"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 32093.73296893193,
            "unit": "iter/sec",
            "range": "stddev: 0.000005964642441671428",
            "extra": "mean: 31.158731237903726 usec\nrounds: 19121"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 631.1997580858704,
            "unit": "iter/sec",
            "range": "stddev: 0.000059932553865441536",
            "extra": "mean: 1.5842845108694685 msec\nrounds: 368"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 66.18674825218628,
            "unit": "iter/sec",
            "range": "stddev: 0.00023005279382588487",
            "extra": "mean: 15.108764615384592 msec\nrounds: 65"
          }
        ]
      }
    ]
  }
}