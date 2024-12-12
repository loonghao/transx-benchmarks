window.BENCHMARK_DATA = {
  "lastUpdate": 1734017740528,
  "repoUrl": "https://github.com/loonghao/transx",
  "entries": {
    "TransX Performance Benchmarks (Python 3.8)": [
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
        "date": 1734017734777,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2965.02144788085,
            "unit": "iter/sec",
            "range": "stddev: 0.0001958987394281162",
            "extra": "mean: 337.2656884875881 usec\nrounds: 886"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 70925.95107067627,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034737858469772425",
            "extra": "mean: 14.099211711712124 usec\nrounds: 1776"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 65083.58087225453,
            "unit": "iter/sec",
            "range": "stddev: 0.000005003746635376983",
            "extra": "mean: 15.364858334436008 usec\nrounds: 30212"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 67430.61687854429,
            "unit": "iter/sec",
            "range": "stddev: 0.000001613080789763652",
            "extra": "mean: 14.830058603811906 usec\nrounds: 31056"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 953245.7050609367,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010342186115980555",
            "extra": "mean: 1.0490474750537424 usec\nrounds: 3307"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 71215.47101070888,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021974345801971054",
            "extra": "mean: 14.041892664722068 usec\nrounds: 33223"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 758.7508670160145,
            "unit": "iter/sec",
            "range": "stddev: 0.00012022095711926138",
            "extra": "mean: 1.3179556603773785 msec\nrounds: 742"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 2245.1147443302098,
            "unit": "iter/sec",
            "range": "stddev: 0.000046757070196559814",
            "extra": "mean: 445.4115329852917 usec\nrounds: 2107"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 60997.69300869721,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019144795181426692",
            "extra": "mean: 16.394062638687295 usec\nrounds: 31546"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 17751.952722139933,
            "unit": "iter/sec",
            "range": "stddev: 0.00002043765702532472",
            "extra": "mean: 56.331830962619506 usec\nrounds: 12092"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1660.025571305565,
            "unit": "iter/sec",
            "range": "stddev: 0.000055136682238956655",
            "extra": "mean: 602.4003589375596 usec\nrounds: 1393"
          }
        ]
      }
    ]
  }
}