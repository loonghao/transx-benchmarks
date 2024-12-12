window.BENCHMARK_DATA = {
  "lastUpdate": 1734017750541,
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
      }
    ]
  }
}