<view class="content">
  <swiper autoplay circular interval="{{interval}}">
    <block qq:for="{{imgUrls}}" qq:key="{{index}}">
      <swiper-item>
        <image src="{{item}}" class="slide-image" width="355" height="150" bind:tap="onLookImg" data-item="{{item}}" />
      </swiper-item>
    </block>
  </swiper>
  <!-- 主体内容 -->
  <view class="main">
    <view class="section">
      <picker mode="time" value="{{time}}" start="{{start}}" end="{{end}}" bindchange="bindTimeChange">
        <view class="font" qq:if="{{timeFlag}}">请选择下班时间</view>
        <view class="font" style="color:#000" qq:else>{{time}}</view>
      </picker>
    </view>
  </view>
  <view class="timer" qq:if="{{timeFlag === false}}">
    <view>{{timer}}</view>
  </view>
</view>