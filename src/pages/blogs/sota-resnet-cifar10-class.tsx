import React from "react";
import { Page } from "../../blogsData";
import resnet from "../../images/Resnet.png";

type PageProps = {
  goToPage: (page: Page) => void;
};

const SotaResnetCifar10: React.FC<PageProps> = ({ goToPage }) => (
  <div className="page">
    <h3>ResNet CIFAR-10 Classifier</h3>
    <p>
      I recently took a machine learning class where we implemented neural
      networks for classification on the MNIST and CIFAR-10 datasets. In class,
      the requirement was to achieve 70% accuracy for CIFAR-10.
    </p>

    <p>
      While I hit that target, the accuracy seemed low. After looking into it, I
      saw that state-of-the-art (SOTA) algorithms have long achieved upwards of
      90% accuracy. I decided that I didn't just want to pass my class
      assignment; I wanted to close that gap.
    </p>

    <p>
      To learn how to implement a SOTA model, I turned to the 2015 paper,{" "}
      <a
        href="https://arxiv.org/pdf/1512.03385"
        target="_blank"
        rel="noopener noreferrer"
      >
        Deep Residual Learning for Image Recognition
      </a>{" "}
      by He et al.
    </p>
    <p>
      This paper introduced ResNet, an architecture that solved the "vanishing
      gradient" problem in deep networks using skip connections. These
      connections allow gradients to flow through the network more easily,
      enabling the training of much deeper networks than was previously
      possible.
    </p>
    <h4>Implementation Details</h4>
    <p>
      I implemented a <strong>ResNet-20</strong> architecture from scratch using
      PyTorch. Following the paper's design for CIFAR-10, my model consists of
      three stages of residual blocks with channel depths of{" "}
      <strong>16, 32, and 64</strong> respectively.
    </p>
    <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
      <li>
        <strong>The Residual Block:</strong> I built a custom{" "}
        <code>ResBlock</code> module to handle the skip connection logic. If the
        dimensions match (stride 1), the input is added directly to the output.
        If the dimensions are reduced (stride 2), I used a 1x1 convolution on
        the shortcut path to match dimensions.
      </li>
      <li>
        <strong>Architecture:</strong> The network uses the classic structure:
        Conv2d → BatchNorm → ReLU → Conv2d → BatchNorm. The final ReLU is
        applied <strong>after</strong> adding the shortcut to the output.
      </li>
      <li>
        <strong>Data Augmentation:</strong> I applied 4-pixel padding with
        random cropping and horizontal flipping to prevent overfitting.
      </li>
    </ul>

    <h4>The &quot;Gotcha&quot;: Training on All Data</h4>
    <p>
      One major realization I had was about data usage. In class, we split data
      into training, validation, and test monitor overfitting. However, I
      realized that to reproduce the paper's 91% accuracy, I needed to deviate
      from this strategy and train on the <strong>entire</strong> training set
      (50,000 images). Maximizing the amount of training data was crucial to
      achieve the last few accuracy percentage points.
    </p>

    <h4>Results</h4>
    <p>
      While my previous class projects capped around 70% accuracy, it was really
      exciting to watch the ResNet model continue to learn steadily, ultimately
      achieving <strong>91% accuracy</strong>.
    </p>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "30px 0",
      }}
    >
      <img
        src={resnet}
        alt="Diagram of the ResNet architecture"
        className="resnet"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  </div>
);

export default SotaResnetCifar10;
